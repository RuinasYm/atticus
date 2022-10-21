const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

var Abrazado = [
    "https://nekocdn.com/images/9FM4gkWk.gif",
    "https://nekocdn.com/images/xV5AuVLD.gif",
    "https://nekocdn.com/images/W5LpAKaL.gif",
    "https://nekocdn.com/images/RjcYybDg.gif",
    "https://nekocdn.com/images/brs_qFJSz.gif",
    "https://nekocdn.com/images/pZAf4k5q.gif",
    "https://nekocdn.com/images/Np0NchUt.gif",
    "https://nekocdn.com/images/pZAf4k5q.gif",
    "https://nekocdn.com/images/t5ii4O8T.gif"
];
module.exports = {
    name: "abrazo", ///// Nombre de el comando
    alias: ["hug"], ////Alias de el comando 

    execute (client, message, args) {

        let Abrazo = Abrazado[Math.floor(Math.random() * Abrazado.length)];

        if (!args.length) return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:x_:1030676024662442065> |  Tienes que mencionar a alguien a quien quieras Abrazar! | <:x_:1030676024662442065>**")
                .setColor("e60ad4")
            ]
        })
        
        const usuario = message.mentions.users.first()
    
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag} ha abrazado a ${usuario.tag} `, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
        .setImage(`${Abrazo}`)
        .setColor("e60ad4")
        
    
        message.reply({ embeds: [embed] })
        
    }
}