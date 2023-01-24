const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');

module.exports = (guild, id) => {
    let connection = voiceDiscord.joinVoiceChannel({
        guildId: guild.id,
        channelId: id,
        adapterCreator: guild.voiceAdapterCreator
    })
}