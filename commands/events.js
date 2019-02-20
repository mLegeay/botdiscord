const Command = require('./command')

module.exports = class events extends Command {

    static match(message) {
        const id_webhook = 547780825455001602
        return message.author.id == id_webhook
    }

    static action(message) {
        var splited = message.embeds[0].title.split(",")
        console.log(message.embeds[0].title.split(","))
        console.log(splited[1]) // 2019 at 01:30PM April 9 => 09/04/2019:1:30
    }
}