const Command = require('./command')
const settings = require('../settings/settings')
const Channel = require('../action/channel')

module.exports = class events extends Command {

    static match(message) {
        return message.author.id == settings.Webhook
    }

    static action(message) {
        var splited = message.embeds[0].title.split(",")
        var title = splited[0].replace(/ /g, '-')
        console.log(title)
        Channel.create(message, title, 'text', null, 'ceci est un test pour voir la raison')
    }
}