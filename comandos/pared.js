const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pared",
    aliases: [],

    async execute (client, message, args) {
        const embed = new Discord.MessageEmbed()
        
        .setAuthor("Pared", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
        .setDescription(`**${message.author.tag} Acabo de poner pared**`)
        .setImage("https://cdn.discordapp.com/attachments/1014748725110902904/1019485194329260072/lv_0_20220914004750.gif")
        .setFooter("Gracias por Preferirnos")
        .setColor("e60ad4")
        .setTimestamp()

        message.channel.send({ embeds: [embed] })
    }
} 