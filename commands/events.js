const Command = require('./command')
const settings = require('../settings/settings')
const Channel = require('../action/channel')
const Role = require('../action/role')

module.exports = class events extends Command {

    static match(message) {
        return message.author.id == settings.Webhook
    }

    static async action(message) {
        var splited = message.embeds[0].title.split(",")
        var title = splited[0].replace(/ /g, '-')
        var role = await Role.create(message, title)
        var permission = [
            {
                id: message.guild.defaultRole.id,
                deny: ['VIEW_CHANNEL']
            },
            {
                id: role.id,
                allow: ['VIEW_CHANNEL']
            }
        ]
        Channel.create(message, title, 'text', permission)
        var content = title + "\nSi vous souhaitez participer à l'évènement, merci de cliquer sur :white_check_mark:"
        Channel.send(message, content)
            .then(function (message) {
                message.react("✅")
            }).catch(function() {
                console.log("Error on this one")
            });
    }
}