require('dotenv').config();
const Discord = require('discord.js');
const TOKEN = process.env.API_TOKEN;

const client = new Discord.Client({
  intents: [
    'GUILDS', 
    'GUILD_MESSAGES'
  ],
});

client.on('ready', () => console.log(`Logged as ${client.user.tag}`))

client.on("messageCreate", (message) => {
  const messageCopy = message.content.split(" ")
  const tag = messageCopy[0], param1 = messageCopy[1], param2 = messageCopy[2]
  if (tag == '<@995438976200618005>') {
    if (param1 === 'hola') message.reply('hola papito :point_right::point_left: :flushed:')
  }
})
//a
client.login(TOKEN)