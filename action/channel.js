const settings = require('../settings/settings')
const Discord = require('discord.js')
const bot = settings.bot

module.exports = class channel {

    static create(message, name, type, overwrites=null, reason) {
        message.guild.createChannel(name, type, overwrites, reason)
    }

    static delete(_reason) {
        bot.delete(reason=_reason)
    }
}