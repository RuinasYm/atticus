//test
/*const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "formulario",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   
   async execute (client, message, args) {
    const questions = [
      "Pregunta1",
      "Pregunta2",
    ];

    let collectCounter = 0;
    let endCounter = 0;

    const filter = (m) => m.author.id === message.author.id;

    const appStart = await message.author.send(questions[collectCounter++]);
    const channel = appStart.channel;

    const collector = channel.createMessageCollector(filter);

    collector.on("collect", () => {
      if (collectCounter < questions.length) {
        channel.send(questions[collectCounter++])
      } else {
        channel.send("Tu formulario fue enviado!!");
        collector.stop("fulfilled");
      }
    });

    const appsChannel = client.channels.cache.get('1030661986788319262');
    collector.on('end', (collected, reason) => {
      if(reason === 'fulfilled') {
        let index = 1;
        const mappedResponses = collected
          .map((msg) => {
           return `${index++}) ${questions[endCounter++]}\n-> ${msg.content}`;
          })
          .join('\n\n');
        
        const embedpost = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setTitle("Nuevo Formulario")
          .setDescription(mappedResponses)
          .setColor("RANDOM")
          .setTimestamp()

        appsChannel.send({ embeds: [embedpost] });
      }
    });
  },
};
*/