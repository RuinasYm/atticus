const Discord = require('discord.js'); //Definimos discord
const { Client, Intents, MessageEmbed, Collection, Guild } = require('discord.js');
const intents = new Discord.Intents(14023)
const client = new Discord.Client({ intents })
const fs = require('fs'); //Definimos fs
let { readdirSync } = require('fs'); //Definimos readdirSync que también lo necesitamos

client.on("ready", () => {
console.log("¡Funcionando Correctamente!")
});


////////////////////////HANDLER//////////////////////////
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

//slahs commands
client.slashcommands = new Discord.Collection();
const slashcommandsFile = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))
for(const file of slashcommandsFile){
  const slash = require(`./slashcmd/${file}`)
  console.log(`Slash cmd - ${file} Iniciado!`)
  client.slashcommands.set(slash.data.name, slash)

}

client.on("interactionCreate", async(interaction) => {
  if(!interaction.isCommand()) return;

  const slashcmds = client.slashcommands.get(interaction.commandName)

  if(!slashcmds) return;

  try{
    await slashcmds.run(client, interaction)
  } catch(e) {
    console.error(e)
  }
})
//Eventos
for(const file of readdirSync('./eventos/')) { //Los eventos de carga para el bot
  if(file.endsWith(".js")){
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./eventos/${file}`); 
  client.on(fileName, fileContents.bind(null, client));}}
  
client.on('messageCreate', (message) => {

let prefix = '!'

let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
if (message.content.match(RegMention)) return message.reply({
  embeds: [new Discord.MessageEmbed()
    .setAuthor(`Club Atticus`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
    .setColor("e60ad4")
    .setFooter("Gracias por Preferirnos")
    .setTimestamp()
    .setDescription("Hola soy Atticus, un bot multiusos en Desarrollo.")
    .addField(`\n\n > <:Ayuda:1031296602037571685> Prefix: **${prefix}**`, `\n
    Para ver el menu de comandos usa **!Help**
    \n > <:Global:1031307029408661564> [**Discord**](https://discord.gg/K6rB4pQ2jB) **Oficial**`)]})
    

if(message.channel.type === "dm") 
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

let usuario = message.mentions.members.first() || message.member;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)
}
  
    });

    //codigo anti-crash
    process.on('unhandledRejection', error => {
      console.error(error);
    });
    
    client.on('shardError', error => {
      console.error(error);
    });
      
    
    //Código ver los mensajes que le envian al bot por MD
    client.on("messageCreate", async (message) => {
      if (message.author.id === "598270518009004062") return;
      if (message.channel.type === "DM" && !message.author.bot) {
        const owner = await client.users.cache.get("598270518009004062");
        if (owner)
          owner.send({
            content:
              `\`\`\`\El Usuario ${message.author} ${message.author.tag} (${message.author.id}) Me ha enviado un mensaje:\`\`\`\ ` +
              message.content,
          });
        
      }
    });

client.login("OTk2NDk0NTQwMDY2Mjc5NDI1.Gv-OtZ.wcNH54eL0HjJ2U7UAqW2_usMVWm5hAMc7r1NiY")