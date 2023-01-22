const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');

module.exports = (message) => {
    //check if the message author is in a voice channel
    let connection = voiceDiscord.joinVoiceChannel({
        guildId: message.guild.id,
        channelId: message.member.voice.channel.id,
        adapterCreator: message.guild.voiceAdapterCreator
    })

    connection.on(voiceDiscord.VoiceConnectionStatus.Ready, () => {
        console.log("Voice connection ready");
    })
}