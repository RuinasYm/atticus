const Discord = require("discord.js");

module.exports = {
  name: "8ball",
  alias: [],

  execute(client, message, args){

    let texto = args.slice().join(" ")
    if(!texto) return message.channel.send("**<:x_:1030676024662442065> |  Tienes que preguntar Algo! | <:x_:1030676024662442065>**")

    let respuestas = ["Si", "No", "Tal vez", "Probablemente"]

    if(texto.length > 100) return message.channel.send("**<:x_:1030676024662442065> |  No puedes preguntar algo con mas de 100 letras! | <:x_:1030676024662442065>**")

        if(texto.includes("https://")) return message.channel.send("**<:x_:1030676024662442065> |  No puedes preguntar algo con links! | <:x_:1030676024662442065>**")
        if(texto.includes("http://")) return message.channel.send("**<:x_:1030676024662442065> |  No puedes preguntar algo con links! | <:x_:1030676024662442065>**")
        if(texto.includes("https://")) return message.channel.send("**<:x_:1030676024662442065> |  No puedes preguntar algo con links! | <:x_:1030676024662442065>**")
        if(texto.includes("discord.gg/")) return message.channel.send("**<:x_:1030676024662442065> |  No puedes preguntar algo con links! | <:x_:1030676024662442065>**")
        if(texto.includes("discord.io/")) return message.channel.send("**<:x_:1030676024662442065> |  No puedes preguntar algo con links! | <:x_:1030676024662442065>**")

    const ball = new Discord.MessageEmbed()
    .setAuthor(`Bola Mágica 🎱`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setFooter("Gracias por preferirnos")
    .setColor("e60ad4")
    .setTimestamp()
    .addField(`\n\n > Pregunta:`, `\n${texto}`)
    .addField(`\n\n > Respuesta:`,`\n${respuestas[( Math.floor(Math.random() * respuestas.length))]}`)
    message.channel.send({ embeds: [ball]})
    
  }
}