const Discord = require('discord.js');

module.exports = {
    name: "server-icon",
    aliases: [],

    async execute (client, message, args) {

        let server = message;

        let png = server.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
        let jpg = server.guild.iconURL({ format: 'jpg', dynamic: true, size: 1024 });
        let webp = server.guild.iconURL({ format: 'webp', dynamic: true, size: 1024 });

        const svicon = new Discord.MessageEmbed()
            .setAuthor(`Icono del Servidor: ${message.guild.name}`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("e60ad4")
            .setFooter("Gracias por Preferirnos")
            .setTimestamp()

        message.channel.send({ embeds: [svicon], components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`PNG`).setURL(png),
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`JPG`).setURL(jpg),
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`WEBP`).setURL(webp),
            ]
        )]})
    }
    
}