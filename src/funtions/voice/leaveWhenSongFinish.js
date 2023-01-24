const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');

module.exports = (guild) => {
    voiceDiscord.getVoiceConnection(guild.id).state.subscription.player.addListener("stateChange", (oldOne, newOne) => {
        if (newOne.status == "idle") {
            voiceDiscord.getVoiceConnection(guild.id).destroy();
        }
    });
}