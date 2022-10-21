const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const db = require("megadb")
const suggest = new db.crearDB("suggest")

module.exports = {
  name: "set-suggest",//Nombre del comando
  alias: ["set-sugerencia"],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

const id = args[0]
if(!id) return message.reply("**<:x_:1030676024662442065> | Este no es un canal Valido! | <:x_:1030676024662442065>**")

const canal = message.mentions.channels.first() || client.channels.cache.get(id)
if (!canal) return message.reply("**<:x_:1030676024662442065> | Este no es un canal Valido! |<:x_:1030676024662442065>**")

let canalservidor = message.guild.channels.resolve(canal.id)
if(!canalservidor) return message.reply("**<:x_:1030676024662442065> | Deves mencionar un Canal! | <:x_:1030676024662442065>**")

suggest.establecer(message.guild.id, canal.id)

message.reply(`**<:gg:1018318507114500136> | El canal de sugerencias a sido establecido en ${canal.name}! | <:gg:1018318507114500136>**`)


    
  }

}