const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "kicksv",
    alias: "",
    owner: true,
    async execute (client, message, args) {

        if(!args[0]) return message.reply(`**<:x_:1030676024662442065> |  Menciona un servidor Valido! | <:x_:1030676024662442065>**`)
        const guildid = args[0]
        
        client.guilds.cache.get(guildid).leave()
        const embed = new Discord.MessageEmbed()
                 
        .setAuthor("KickSv", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
        .setDescription(`**<:gg:1018318507114500136> | He abandonado correctamente el servidor ${guildid}! | <:gg:1018318507114500136>**`)
        .setColor("e60ad4")
        .setFooter("Gracias por Preferirnos")
        .setTimestamp()
        message.reply({embeds: [embed] })
        setTimeout(() => {
        message.delete();
            
        }, 15000)
 
    }
}

