const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "manco",
    alias: [],

    async execute (client, message, args) {
        let manco = Math.floor(Math.random() * 100)

        const embed = new Discord.MessageEmbed()

        .setAuthor("Manco", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
        .setDescription(`${message.author.tag} **Tu nivel de manco es de** ${manco}%`)
        .setImage("https://cdn.discordapp.com/attachments/995244061806039100/1019370889390866492/images_8.jpeg")
        .setFooter("Gracias por Preferirnos")
        .setColor("e60ad4")
        .setTimestamp()

        message.channel.send({ embeds: [embed] })
    }
} 