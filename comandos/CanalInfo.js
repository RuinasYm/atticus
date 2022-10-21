const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "canalinfo",
    aliases: [],
    desc: "Muestra información de un canal",
    usage: "channelinfo [#canal]",
    owner: false,
async execute (client, message, args) {

const canal = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel;

  let canaltype;
  if(canal.type === "GUILD_TEXT") canaltype = "💬 Texto"
  if(canal.type === "GUILD_VOICE") canaltype = "🔊 Voz"

let category;
  if(canal.parent){
    category = canal.parent.id
  } else {
    category = "Ninguna"
  }

  const embed = new Discord.MessageEmbed()
  .setAuthor("Información del canal", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
  .addField(`Nombre`, `${canal.name}`)
  .addField(`ID`, `${canal.id}`)
  .addField(`Creación`, `<t:${parseInt(canal.createdTimestamp / 1000)}:f> (<t:${parseInt(canal.createdTimestamp / 1000)}:R>)`)
  .addField(`Tipo del canal`,  `${canaltype}`)
  .addField(`¿Canal nsfw?`, `${canal.nsfw ? "<:gg:1018318507114500136> Si" : "<:x_:1030676024662442065> No"}`)
    .addField(`¿Cuenta con una descripción?`, `${canal.topic ? "<:gg:1018318507114500136> Si" : "<:x_:1030676024662442065> No"}`)
    .addField(`Categoría`, `<#${category}>`)
.setFooter("Gracias por Preferirnos")
  .setColor("e60ad4")
  .setTimestamp()

  message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
    }
} 