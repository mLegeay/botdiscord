const Command = require('./command')
const settings = require('../settings/settings')
const Channel = require('../action/channel')
const Role = require('../action/role')

module.exports = class events extends Command {

    static match(message) {
        return message.content == "*deleteEvent"
    }

    static async action(message) {
        if (!message.member.hasPermission(['ADMINISTRATOR'])){
            return
        }
        var role = message.guild.roles.find(role => role.name.toLowerCase() === message.channel.name)
        console.log(message.channel.name.toLowerCase())
        console.log(role)
        if (role != null){
            role.delete()
            message.channel.delete()
        }
    }
}