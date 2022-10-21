const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
.setName("banana")
.setDescription("🍌Te muestra el Tamaño de tu Banana"), 
  
  
  async run(client, interaction){
    let cm = Math.floor(Math.random() * 100)

  interaction.reply({
   
    embeds: [new MessageEmbed()
      .setDescription(`**Tu banana mide:** ${cm}cm`)
      .setAuthor(`Banana`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
      .setColor("e60ad4")
      .setFooter("Gracias por Preferirnos")
      .setTimestamp()
    ]
  })
  }
  }