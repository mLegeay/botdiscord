module.exports = class channel {

    static create(message, name=null, color=null, hoist=false, position=null, permissions=null, mentionable=false) {
        return message.guild.createRole({
            name: name,
            color: color,
            hoist: hoist,
            position: position,
            permissions: permissions,
            mentionable: mentionable,
          })
    }

    static add(guildMember, role) {
        guildMember.addRole(role)
    }

    static delete(reason=null) {
        // return bot.delete(reason)
    }
}