const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "ping",
  alias: ["p"],
  descripcion: "",

  async execute (client, message, args) {

  const Embed = new Discord.MessageEmbed()
  .setAuthor("Ping", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
  .setDescription(`**Latencia:** ${client.ws.ping} ms `)
  .setColor("e60ad4")
  .setFooter("Gracias por Preferirnos")
  .setTimestamp()
  
  
message.reply({ embeds: [Embed] })
  }
}