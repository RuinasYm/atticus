const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const { crearDB } = require("megadb")
const db = new crearDB("confesiones")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("confesion")
        .setDescription("Envia una Confesion!")
        .addStringOption(o => o.setName("confesion").setDescription("escribe tu confecion").setRequired(true))
        .addBooleanOption(oa => oa.setName("anonima").setDescription("establece si la confesion sera anonima o no").setRequired(true)),
        
    async run(client, interaction){

        const contenido = interaction.options.getString("contenido")
          const anonimo = interaction.options.getBoolean("anonimo")

        if(!db.tiene(interaction.guild.id)) return interaction.reply({ content: "no hay un canal de confesiones en este servidor", ephemeral: true})

        if(anonimo === false){
            const embed = new Discord.MessageEmbed()
            .setDescription(`confesion de: ${interaction.user.tag}\n ${contenido}`)
            .setAuthor(`Confesion`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setColor("e60ad4")
            .setFooter("Gracias por Preferirnos")
            .setTimestamp()

            client.channels.cache.get(await db.obtener(interaction.guild.id)).send({embeds: [embed] })

        }

        if(anonimo === true){
            const embed1 = new Discord.MessageEmbed()
            .setDescription(`confesion Anonima\n ${contenido}`)
            .setAuthor(`Confesion`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setColor("e60ad4")
            .setFooter("Gracias por Preferirnos")
            .setTimestamp()

            client.channels.cache.get(await db.obtener(interaction.guild.id)).send({embeds: [embed1] })

      }

      interaction.reply({ content: "confecion enviada exitosamente", ephemeral: true})
  }
 
}