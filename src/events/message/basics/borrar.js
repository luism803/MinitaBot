const Discord = require('discord.js');
const Is = require('../../../funtions/is/is');

module.exports = (message) => {
    let n = message.content.substring(7);
    if(Is.Integer(n)){
        message.channel.bulkDelete(parseInt(n)+1);
    }
}

