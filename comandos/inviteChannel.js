const Discord = require('discord.js');

module.exports = {
    name: "invitechannel",
    alias: [],

   async execute (client, message, args) {
        message.channel.createInvite({ maxAge: 0, MaxUses: 5 }).then(link => {

                const invite = new Discord.MessageEmbed()
                .setFooter({ text: `${message.author.tag}`, iconURL: message.guild.iconURL ({ dynamic: true }) })
                .setDescription(`\n **${link}**`)
                .setTimestamp()
                .setAuthor("Invite Channel", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
                .setFooter("Gracias por Preferirnos")
                .setColor("e60ad4")
                .setImage("https://cdn.discordapp.com/attachments/996597249322778674/1031305723952517322/CLUB_ATTICUS.png")

       message.channel.send({ embeds: [invite] });

        });

    }
}