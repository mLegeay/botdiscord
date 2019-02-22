module.exports = class channel {

    static create(message, name, type, overwrites=null, reason=null) {
        return message.guild.createChannel(name, type, overwrites, reason)
    }

    static send(message, content) {
        return message.channel.send(content)
    }

    static delete(message, reason) {
        return message.guild.delete(reason)
    }
}