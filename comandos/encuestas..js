//mejorar embed
const Discord = require('discord.js');

module.exports = {
  name: "encuesta", 
  alias: [], 

execute (client, message, args){

    let texto = args.join(' ')
    if(!texto) return message.reply('Debes ingresar una pregunta!')
    if(texto.length > 100){
        return message.reply('No puedes poner más de 100 palabras!')
    }

  const en = new Discord.MessageEmbed()
    .setTitle('Encuesta! 📊')
    .setDescription(texto)
    .setColor('RANDOM')

    message.channel.send({embeds: [en]}).then(async (e) => {

        e.react('👍')
        e.react('👎')
        
    })

 }

} 