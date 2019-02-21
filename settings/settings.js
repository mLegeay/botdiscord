const yaml = require('js-yaml');
const fs = require('fs');

try {
    const config = yaml.safeLoad(fs.readFileSync(__dirname + '/settings_prod.yaml', 'utf8'));

    module.exports = {
        Token: config['Token']
    };
} catch (e) {
    console.log("Create a settings_prod.yaml file in settings");
}