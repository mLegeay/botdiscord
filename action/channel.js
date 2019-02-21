const settings = require('../settings/settings')
const Discord = require('discord.js')
const bot = settings.bot

module.exports = class channel {

    static create(name, type, overwrites=null, reason) {
        bot.createChannel(name, type, overwrites, reason)
    }

    static delete(_reason) {
        bot.delete(reason=_reason)
    }
}