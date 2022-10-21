const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const { crearDB } = require("megadb")
const db = new crearDB("confesiones")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup-confesiones")
        .setDescription("Establece el canal de sugerencias de este Servidor")
        .addChannelOption(a => a.setName("canal").setDescription("el canal de confesiones").setRequired(true)),
        
    async run(client, interaction){

        const channel = interaction.options.getChannel("canal")

        if(channel.type !== "GUILD_TEXT") return interaction.reply({content: "el canal deve de ser de texto", ephemeral: true})
        db.establecer(interaction.guild.id, channel.id)
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`El canal de ${channel} se ha establecido como canal de confesiones`)
        .setAuthor(`Confesiones`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
        .setColor("e60ad4")
        .setFooter("Gracias por Preferirnos")
        .setTimestamp()

        interaction.reply({embeds: [embed]})

       }

    }