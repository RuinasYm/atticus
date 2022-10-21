const Discord = require('discord.js');
const {MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: [],

    async execute (client, message, args) {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let png = user.avatarURL({ format: 'png', dynamic: true, size: 1024 })
        let jpg = user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
        let webp = user.avatarURL({ format: 'webp', dynamic: true, size: 1024 })


        const avatar = new Discord.MessageEmbed()
        .setAuthor(`Avatar de ${message.author.tag}`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
        .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setColor("e60ad4")
        .setFooter("Gracias por preferirnos")
        .setTimestamp()
        message.channel.send({ embeds: [avatar], components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle("LINK").setLabel("PNG").setURL(`${png}`),
                new Discord.MessageButton().setStyle("LINK").setLabel("JPG").setURL(`${jpg}`),
                new Discord.MessageButton().setStyle("LINK").setLabel("WEBP").setURL(`${webp}`),
            ]
        )]})
    }
    
}