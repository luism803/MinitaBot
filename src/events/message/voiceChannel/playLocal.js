const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');
const Voice = require('../../../funtions/voice/voice');

module.exports = (message) => {
    if(!message.member.voice.channel)
        message.reply("Join a channel first.");
    else if(!voiceDiscord.getVoiceConnection(message.guild.id))
        message.reply("No estoy en nigun canal")
    else if(!(message.member.voice.channel.id === voiceDiscord.getVoiceConnection(message.guild.id).joinConfig.channelId))
        message.reply("No estamos en el mismo canal")
    else
        Voice.playLocal(message.guild, "a.mp3");
}
