const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("invite")
        .setDescription("Invitame a tu Servidor"),
    

    async run(client, interaction){
        interaction.reply({
            embeds: [new MessageEmbed()
                .setDescription(`\n **[CLICK PARA INVITARME](https://discord.com/api/oauth2/authorize?client_id=996494540066279425&permissions=8&scope=bot)**`)
                .setTimestamp()
                .setAuthor("Invite", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
                .setFooter("Gracias por Preferirnos")
                .setColor("e60ad4")
                .setImage("https://cdn.discordapp.com/attachments/996597249322778674/1031305723952517322/CLUB_ATTICUS.png")
            ]
          })
          }
          }
