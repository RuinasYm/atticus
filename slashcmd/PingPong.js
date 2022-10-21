const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("🏓 Muestras mi latencia"),
    

    async run(client, interaction){
        interaction.reply({
            embeds: [new MessageEmbed()
              .setDescription(`**Latencia:** ${client.ws.ping} ms`)
              .setAuthor(`Ping`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
              .setColor("e60ad4")
              .setFooter("Gracias por Preferirnos")
              .setTimestamp()
            ]
          })
          }
          }
