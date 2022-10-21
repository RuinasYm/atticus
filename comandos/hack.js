const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = {
    name: "hack",
    alias: [],
    desc: "Sirve para hackear",
    // Es solo diversion

    async execute (client, message, args) {

        let ip = Math.floor(Math.random() * 91)
        let ip1 = Math.floor(Math.random() * 81)
        let ip2 = Math.floor(Math.random() * 54)
        let ip3 = Math.floor(Math.random() * 48)
        let numero = Math.floor(Math.random() * 10)
        let numero1 = Math.floor(Math.random() * 50)
        let numero2 = Math.floor(Math.random() * 70)

        
        let correo = [
            "@gmail.com", "@gmail.co", "@outlook.es", "@outlook.com", "@outlook.co", "@hotmail.es"
          ] 
    
        let finalcorreo = correo[Math.floor(Math.random() * correo.length)] 
        const userID = args[0]

        let hackeado = message.mentions.members.first() || message.guild.members.cache.get(userID) || message.author
        if(!args[0]) return message.reply('**<:x_:1030676024662442065> | Debes mencionar a un usuario para Hackear! | <:x_:1030676024662442065>**')
        if(hackeado.id == message.author) return message.reply('**<:x_:1030676024662442065> |  No te puedes hackear a ti Mismo! | <:x_:1030676024662442065>**')

        let mensaje = await message.channel.send({
            embeds: [new MessageEmbed()
                .setAuthor("❗ |  Empezando el proceso de Hackeo! | ❗", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
                .setDescription(`Proceso de hackeo contra ${hackeado}`)
                .setColor("e60ad4")
                .setTimestamp()
                .setFooter("Gracias por Preferirnos")
             ]

        })

        setTimeout(() => {
            mensaje.edit({
              embeds: [new MessageEmbed()
                .setAuthor("✔️ |  Hackeo realizado con Exito! | ✔️", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
                .setDescription(`${hackeado} fue hackeado y obviamente esto es una broma.`)
                .addFields(
                    {name: "IP:", value: `${ip}.${ip1}.${ip2}.${ip3}`},
                    {name: "Gmail:", value: `${hackeado.user.username}${finalcorreo} `},
                    {name: "Contraseña", value: `${hackeado.user.username}.${numero}${numero1}${numero2} `}
                )
                .setColor("e60ad4")
                .setTimestamp()
                .setFooter("Gracias por Preferirnos")
              ]
            })
            }, 10000) 
            
    }
}