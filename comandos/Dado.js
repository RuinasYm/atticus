//en testeo
/*
const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "dado",
    alias: [],
    async execute (client, message, args) {
        const dado = Math.floor(Math.random() * 6)

const Embed = Discord.MessageEmbed()
.setAuthor(`Autor: ${message.author.username}`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
.setColor("e60ad4")
.setFooter("Gracias por preferirnos")
.setTimestamp()
.addField(`\n🎲 Tu número es:`, `\n${dado}`)  
message.delete()

message.channel.send({ embeds: [Embed] })
    }
}
*/