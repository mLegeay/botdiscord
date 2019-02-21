const yaml = require('js-yaml');
const fs = require('fs');

try {
    const config = yaml.safeLoad(fs.readFileSync('settings_prod.yml', 'utf8'));
} catch (e) {
    console.log("Create a prod_private.py file in settings");
}

const Token = config.Token