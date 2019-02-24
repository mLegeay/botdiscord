const settings = require('./settings/settings')
const Discord = require('discord.js')
const events = require('./commands/events')
const delete_events = require('./commands/delete-event')
const Role = require('./action/role')
const bot = settings.bot

bot.on('ready', function (){
    bot.user.setActivity('Under development').catch(console.error)
})

bot.on('message', function (message){
    events.parse(message)
    delete_events.parse(message)
    if(message.author.bot) return;
    if(message.content.indexOf(settings.prefix) !== 0) return;
    delete_events.parse(message)
})

bot.on('messageReactionAdd', async function (messageReaction, user){
    if(user.bot) return;
    if(messageReaction.emoji.name != '✅') return;
    var splited = messageReaction.message.content.split("\n");
    var member = await messageReaction.message.guild.fetchMember(user)
    Role.add(member, messageReaction.message.guild.roles.find(role => role.name === splited[0]))
})

bot.login(settings.Token)