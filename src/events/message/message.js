const Discord = require('discord.js');

const saludar = require('./basics/saludar');
const borrar = require('./basics/borrar');
const join = require('./voiceChannel/join');
const leave = require('./voiceChannel/leave');
const playLocal = require('./voiceChannel/playLocal');
const uwu = require('./basics/uwu');

module.exports = (client) => {
    client.on('messageCreate', (message) => {
        if(message.author.bot)
            return;
        let content = message.content.toLowerCase()
        if (content === 'Hola') {
            saludar(message);
            return;
        }
        if(content.startsWith("borrar ")){
            borrar(message);
            return;
        }
        if(content === "join"){
            join(message);
            return;
        }
        if(content === "leave"){
          leave(message);
          return;
        }
        if(content === "a"){
            playLocal(message)
            return;
        }
        if(content === "uwu"){
            uwu(message);
            return;
        }
    });
}