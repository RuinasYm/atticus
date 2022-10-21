const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {

    data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("🎱 Pregunta a la bola mágica")
    .addStringOption(option => option.setName("pregunta").setDescription("Formula tu pregunta").setRequired(true)),

    async run(client, interaction){

        let question = interaction.options.getString("pregunta") 

        let answer = [
            "Si", "No", "Tal vez", "Probablemente"
        ] 
    
        let finalAnswer = answer[Math.floor(Math.random() * answer.length)]

interaction.reply({
   
    embeds: [new MessageEmbed()
      .setAuthor(`Bola Mágica 🎱`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
      .addField("\n\n > Pregunta:", `${question}`)
      .addField("\n\n > Respuesta:", `${finalAnswer}`)
      //.setDescription(` > Pregunta: ${question}\n\n > Respuesta: ${finalAnswer}`)
      .setColor("e60ad4")
      .setFooter("Gracias por Preferirnos")
      .setTimestamp()
    ]
  })

    }
    
}