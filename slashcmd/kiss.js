//mejorar embed
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kiss")
    .setDescription("Besa a tu amigo")
    .addUserOption(option => option.setName("member").setDescription("Menciona a tu amigo, el que besaras").setRequired(true)), // La opcion del usuario, el cual tenemos que establecer un nombre y una descripcion, y claramente requerirlo obligatoriamente.
    async run(client, interaction){
        const member = interaction.options.getMember("member"); // Aca requerimos la opcion que le agregamos a nuestro slash command y lo convertirmos a un member.

        let RandomGifs_Text = [ // aca ponemos nuestros gifs, o imagenes
            `https://cdn.discordapp.com/avatars/598270518009004062/0f447afa06e10fc13075b14f538fa84e.png?size=1024`,
            `https://cdn.discordapp.com/avatars/598270518009004062/0f447afa06e10fc13075b14f538fa84e.png?size=1024`
        ];
        let RandomGifs = RandomGifs_Text[Math.floor(Math.random() * RandomGifs_Text.length)]; // establecemos el random, para que los gifs que pongamos ahi sean random

        const file = new MessageAttachment(RandomGifs); // Establecemos el attachment y ponemos el random para que mande la imagen random claro.

        interaction.reply({ content: `${member.user.username} fue besado`, files: [file] }); // Enviamos el mensaje con el usuario que fue besado, y el file, el attachment
    }
}
