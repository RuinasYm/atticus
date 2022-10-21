const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "off",
    alias: [],

    execute (client, message, args) {

        if(message.author.id !== "598270518009004062") return message.channel.send("**<:x_:1030676024662442065> |  No tienes suficientes permisos para ejecutar este Comando! | <:x_:1030676024662442065>**")

        const embed = new Discord.MessageEmbed()
        .setTitle(`**<:gg:1018318507114500136> | Bot Apagado Exitosamente! | <:gg:1018318507114500136>**`)
        .setColor("e60ad4")
        .setFooter("Gracias por Preferirnos")
        .setTimestamp()
        
        message.channel.send({embeds: [embed]})
        
        setTimeout(function(){
                    
                console.count(expensiveprocess)}, 2000);

        

    }
}