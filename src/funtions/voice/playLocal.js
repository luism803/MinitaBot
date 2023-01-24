const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');

module.exports = (guild, str) => {
    let resource = voiceDiscord.createAudioResource("C:\\Users\\a\\Documents\\audio\\"+str, {inlineVolume : true});
    const player = voiceDiscord.createAudioPlayer();
    voiceDiscord.getVoiceConnection(guild.id).subscribe(player);
    player.play(resource, {seek: 0, volume: 1.0});
}