const yaml = require('js-yaml');
const fs = require('fs');
const Discord = require('discord.js')

try {
    const config = yaml.safeLoad(fs.readFileSync(__dirname + '/settings_prod.yaml', 'utf8'));

    module.exports = {
        bot: new Discord.Client(),
        Token: config['Token'],
        Webhook: config['Webhook'],
        Prefix: config['Prefix']
    };
} catch (e) {
    console.log("Create a settings_prod.yaml file in settings");
}