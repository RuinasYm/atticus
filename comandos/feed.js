const Discord = require('discord.js')
const NekoClient = require("nekos.life")
const neko = new NekoClient()


module.exports = {
   name: "feed",
   premiun: false,

   async execute (client, message, args) {

    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("**<:x_:1030676024662442065> |  Debes nombrar a quien quieres Alimentar! | <:x_:1030676024662442065>**")

    if (user.id == message.author.id) return message.channel.send("**<:x_:1030676024662442065> |  No te puedes alimentar a ti Mismo! | <:x_:1030676024662442065>**")



        neko.feed().then(neko => {
        const embed = new Discord.MessageEmbed()
        .setAuthor("Feed", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
        .setDescription(`${message.author.tag} Alimento a ${user.tag}`)
        .setImage(neko.url)
        .setFooter("Gracias por Preferirnos")
        .setColor("e60ad4")
        .setTimestamp()
        message.delete()

        message.channel.send({ embeds: [embed] })
    })

       function newFunction() {
           return neko.sfw.feed
       }
   }
}