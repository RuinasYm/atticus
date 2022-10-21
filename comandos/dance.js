/*  //Funciona faltan links de gifts nuevos
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "baile",
    alias: ["dance"],

    execute: async (client, message, args) => {
const array = ["https://cdn.discordapp.com/attachments/1021531208540229642/1021872250380636270/Sii.gif", "https://cdn.discordapp.com/attachments/1021531208540229642/1021872149197242388/cute-anime-dancing.gif", "https://cdn.discordapp.com/attachments/1021531208540229642/1021872107585544212/dancinganime-anime.gif", "https://cdn.discordapp.com/attachments/1021531208540229642/1021872092876128316/dance-anime-cool.gif", 
"https://cdn.discordapp.com/attachments/1021531208540229642/1021872050761121972/dance-girl.gif",]

const embed = new Discord.MessageEmbed()

.setAuthor("Dance", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")     
.setDescription(`${message.author.username} Se puso a bailar`)
.setColor("e60ad4")
.setFooter("Gracias por preferirnos")
.setTimestamp()
.setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        message.channel.send({ embeds: [embed] })
        message.delete()

    }
}
*/