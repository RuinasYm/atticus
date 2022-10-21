//perfectionar diseño embed e testear funciones

const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    //developer: true, //esto es opcional, solo habilitar si tienes servidor para pruebas.
    data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Eliminar mensajes")
    //opción de número
    .addNumberOption((Options) =>
    Options
    .setName("cantidad")
    .setDescription("numero de mensajes a borrar")
    .setRequired(true))
    //opción de usuario
    .addUserOption((Options) => 
    Options
    .setName("usuario")
    .setDescription("usuario a borrar mensajes")
    .setRequired(false)),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction
     */
     async run(client, interaction){

        try {
            
            const { channel, options } = interaction;

            const Cantidad = options.getNumber("cantidad");
            const Usuario = options.getMember("usuario");

            const Mensaje = await channel.messages.fetch();

            if(Cantidad > 100)
            return interaction.reply({content: `❌ \`No puedes eliminar mas de 100 mensajes a la vez, debido a las restricciones de Discord\``, ephemeral: true});

            const Respuesta = new MessageEmbed()
            .setColor("000000")
            if(Usuario) {
                let i = 0;
                const filtrar = [];
                (await Mensaje).filter((m) => {
                    if(m.author.id === Usuario.id && Cantidad > i) {
                        filtrar.push(m);
                        i++;
                    }
                })

                await channel.bulkDelete(filtrar, true).then(mensaje => {
                    Respuesta.setDescription(`✅ Eliminados \`${mensaje.size}\` mensajes de ${Usuario}.`);
                    interaction.reply({ embeds: [Respuesta], ephemeral: true });
                })
            } else {
                await channel.bulkDelete(Cantidad, true).then(mensaje => {
                    Respuesta.setDescription(`✅ Eliminados \`${mensaje.size}\` mensajes de este canal.`);
                    interaction.reply({ embeds: [Respuesta], ephemeral: true });
                })
            }

        } catch (error) {
            console.log(error)
        }

     }

}
