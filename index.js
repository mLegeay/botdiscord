const settings = require('./settings/settings')
const Discord = require('discord.js')
const bot = new Discord.Client()
const events = require('./commands/events')

bot.on('ready', function (){
    bot.user.setActivity('Under development').catch(console.error)
})

bot.on('message', function (message){
    events.parse(message)
})

bot.login(settings.Token)