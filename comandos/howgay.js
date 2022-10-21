const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "howgay",
  alias: [],
  execute (client, message, args) {

 
    let respuestas = [Math.floor(Math.random() * 100)]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)];
    let dinero = [Math.floor(Math.random() * 100)]
    let dn = dinero[Math.floor(Math.random() * respuestas.length)];
   let salud = [Math.floor(Math.random() * 100)]
    let sl = salud[Math.floor(Math.random() * respuestas.length)];
   let suerte = [Math.floor(Math.random() * 100)]
    let sr = suerte[Math.floor(Math.random() * respuestas.length)];
    const embed = new Discord.MessageEmbed()
    .setAuthor(`HowGay`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setDescription(`Que tan gey eres? ${message.author}`)
    .addField("Eres" ,`\n**${random}%** **gei :gay_pride_flag:**`)
    .setColor("e60ad4")
    .setTimestamp()
    .setFooter("Gracias por Preferirnos")
    message.delete()
    message.channel.send({ embeds: [embed] })

  }

} 