const Discord = require('discord.js')
const db = require("megadb");
const setprefix = new db.crearDB("setprefix")

module.exports = {
    name : 'resetprefix',
    aliases : [],
    async execute (client, message, args) {
//code

      setprefix.eliminar(message.guild.id)

message.channel.send(`:visto1: **| Mi prefix se ha restablecido a:**\n\`\`\`m/\n\`\`\``)

 }
 
}
