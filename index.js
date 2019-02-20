const Discord = require('discord.js')
const bot = new Discord.Client()
const events = require('./commands/events')

bot.on('ready', function (){
    bot.user.setActivity('Under development').catch(console.error)
})

bot.on('message', function (message){
    events.parse(message)
})

bot.login('NTQ3NzU4NjY1MjI3MTczODk4.D07buA.pc4qZ_EfGiAbSgOfe8YHeYyVy4M')