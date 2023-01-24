// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const events = require('./events/events');
require('dotenv').config();

// Create a new client instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ] 
});

// Iniciar sesión con el token
client
    .login(process.env.DISCORD_TOKEN)
    .then(() => {
        console.log(client.user.username, 'is running');
        client.user.setActivity("romperte el coração")
    })
    .catch((err) => console.log(err));

events.messageEvent(client);