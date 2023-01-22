const Discord = require('discord.js');

const saludar = require('./basics/saludar');
const borrar = require('./basics/borrar');
const join = require('./voiceChannel/join');
const leave = require('./voiceChannel/leave');

module.exports = (client) => {
    client.on('messageCreate', (message) => {
        if(message.author.bot)
            return;

        if (message.content === 'Hola') {
            saludar(message);
            return;
        }

        if(message.content.startsWith("borrar ")){
            borrar(message);
            return;
        }
        if(message.content === "join"){
            join(message);
            return;
        }
        if(message.content === "leave"){
          leave(message);
          return;
        }
    });
}