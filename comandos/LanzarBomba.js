const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js')

module.exports = {
    name: "bomb",//Nombre del comando
    alias: [],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
    async execute(client, message, args) {

        const embed = new Discord.MessageEmbed()
            .setAuthor("Lanzaron una Bomba!", client.user.avatarURL())
            .setImage("https://media.tenor.com/5e1S1sXovF4AAAAd/fbomb-bomb.gif") //Esto es opcional, solo pones la URL de la imagen
            .setColor("e60ad4") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
            .setFooter("Gracias por Preferirnos") //footer del embed
            .setTimestamp(); //para que le salga la hora que lo ejecuto

        
        message.reply({ embeds: [embed] })

    }

}