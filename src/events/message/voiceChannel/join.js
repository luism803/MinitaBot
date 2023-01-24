const Discord = require('discord.js');
const Voice = require('../../../funtions/voice/voice'); 

module.exports = (message) => {
    //faltan comprobaciones
    if(!message.member.voice.channel)
        message.reply("Join a channel first.");
    else
        Voice.join(message.guild, message.member.voice.channel.id);
}