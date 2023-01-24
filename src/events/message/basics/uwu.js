const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');
const join = require('./../voiceChannel/join');
const Voice = require('../../../funtions/voice/voice');

module.exports = (message) => {
    if(!message.member.voice.channel)   //el autor del mensaje no esta en un canal de voz
        message.reply("UwU");
    else if(!voiceDiscord.getVoiceConnection(message.guild.id)) {    //el bot no esta en ningun chat de voz
        Voice.join(message.guild, message.member.voice.channel.id);
        Voice.playLocal(message.guild, "uwu.mp3");
        Voice.leaveWhenSongFinish(message.guild)
    }else if(!(message.member.voice.channel.id === voiceDiscord.getVoiceConnection(message.guild.id).joinConfig.channelId))//el bot y el autor no estan en el mismo canal de voz
        message.reply("UwU");
    else
        Voice.playLocal(message.guild, "uwu.mp3");
}