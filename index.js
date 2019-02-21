const settings = require('./settings/settings')
const Discord = require('discord.js')
const events = require('./commands/events')
const bot = settings.bot

bot.on('ready', function (){
    bot.user.setActivity('Under development').catch(console.error)
})

bot.on('message', function (message){
    events.parse(message)
})

bot.login(settings.Token)