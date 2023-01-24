const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');

module.exports = (guild) => {
    voiceDiscord.getVoiceConnection(guild.id).destroy();
}