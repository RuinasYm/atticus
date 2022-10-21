const Discord = require(`discord.js`)
const { MessageActionRow, MessafeSelectMenu, MessageEmbed, MessageButton} = require(`discord.js`)

module.exports = {
name: "banana",
alias: [],
async execute (client, message, args) {

let respuestas = ["1 cm", "2 cm", "3 cm", "4 cm", "5 cm", "6 cm", "7 cm", "8 cm","9 cm","10 cm","11 cm","12 cm","13 cm","14 cm","15 cm","16 cm","17 cm","18 cm","19 cm","20 cm","21 cm","22 cm","23 cm","24 cm","25 cm","26 cm","27 cm","28 cm","29 cm","30 cm","31 cm","32 cm","33 cm","34 cm","35 cm","36 cm","37 cm","38 cm","39 cm","40 cm","41 cm","42 cm","43 cm","44 cm","45 cm","46 cm","47 cm","48 cm","49 cm","50 cm","Siendo tu dudo que tengas algo entre las piernas.","Tu no eras mujer?", "Buen chiste pero lo tienes tan pequeño que ni siquiera se puede medir"]
let random = respuestas[Math.floor(Math.random() * respuestas.length)];
let grosor = ["1 cm", "2 cm", "3 cm", "4 cm", "5 cm", "6 cm", "7 cm", "8 cm","9 cm","10 cm","11 cm","12 cm","13 cm","14 cm","15 cm","16 cm","17 cm","18 cm","19 cm","20 cm","21 cm","22 cm","23 cm","24 cm","25 cm","26 cm","27 cm","28 cm","29 cm","30 cm","31 cm","32 cm","33 cm","34 cm","35 cm","36 cm","37 cm","38 cm","39 cm","40 cm","41 cm","42 cm","43 cm","44 cm","45 cm","Uy, de milagro y esta algo grueso...","Fua hermano, terrible fideo", "Bue hermano pero que es ese fideo"]
let grosor_random = grosor[Math.floor(Math.random() * grosor.length)];
const embed = new Discord.MessageEmbed()
.setAuthor(`Juego Banana`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
.setDescription(` A ${message.author}`)
.addField("Le mide:", `${random}`)
.addField("Y tiene de grosor:", `${grosor_random}`)
.setColor("e60ad4")
.setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f346.png")
.setFooter("Gracias por preferirnos")
.setTimestamp()
message.delete()

message.channel.send({embeds: [embed]})
}

}