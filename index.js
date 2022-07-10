// Libraries
import { Client } from 'discord.js';
import dotenv from 'dotenv'
// Our modules
import piroca from './botCommands/piroca.js'
// Token config stuff
dotenv.config();
const TOKEN = process.env.API_TOKEN;
// Discord config stuff
const client = new Client({
  intents: [
    'GUILDS', 
    'GUILD_MESSAGES',
    'GUILD_MEMBERS'
  ],
});

// Variables on where to save data
var welcomeChannel
// Bot logging in
client.on('ready', () => console.log(`${client.user.tag} esta online para hablar con las nenas 😈😈`))
client.login(TOKEN)
// Bot commands
client.on("messageCreate", (message) => {
  const messageCopy = message.content.split(" "), currChannel = message.channelId
  const tag = messageCopy[0], param1 = messageCopy[1], param2 = messageCopy[2]
  if (tag == '<@995438976200618005>') {
    if (param1 === 'hola') message.reply('hola papito :point_right::point_left: :flushed:')
    else if (param1 === 'piroca') message.reply(piroca(param2))
    else if (param1 === 'config') {
      if (param2 === 'welcome') {
        welcomeChannel = currChannel
        message.reply(`el canal de bienvenida ahora es <#${welcomeChannel}>`)
      }
    }
  }
})


client.on("guildMemberAdd", (member) => {
  console.log(member)
})
