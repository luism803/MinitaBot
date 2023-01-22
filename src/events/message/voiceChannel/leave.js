const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');

module.exports = (message) => {
    if(voiceDiscord.getVoiceConnection(message.guild.id))
        voiceDiscord.getVoiceConnection(message.guild.id).destroy();
}

