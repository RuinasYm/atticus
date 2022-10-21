//mejorar embed
const Discord = require('discord.js');


module.exports = {
  name: "random", 
  alias: [], 

async execute (client, message, args){

        try {

            const memberid = await message.guild.members.fetch()
                .then((usuariostotales) => {
                    return [
                        `${usuariostotales.random().id}`
                    ].join('\n');
                });

   const member = await message.guild.members.cache.find(m => m.id === `${memberid}`)
  const embed = new Discord.MessageEmbed()
  
    .setThumbnail(member.user.displayAvatarURL({ size: 300, dynamic: true}))
    .setDescription(`Usuario: **${member.user.tag}**\nID: **${memberid}**`) 
    .addField('**Union al servidor:**', `<t:${(Number(member.joinedAt) / 1000).toFixed(0)}:D>`)
    .setColor("RANDOM")

  await  message.channel.send({ embeds: [embed] })

        } catch (e) {
            console.log(e)
        }
  

 }

}