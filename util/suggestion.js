const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  config: {
    nombre: "suggestion",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (client, message, args) => {
  
  let text = args.join(' ');
  if(!text) return message.channel.send(`Por favor escribe una sugerencia.`)
  let user = message.author;
  
  let sug = db.get(`sugchannel_${message.guild.id}`)
  
  if(sug === null) {
    return message.channel.send(`Las sugerencias están desactivadas.`)
  }
  
  let embed = new Discord.RichEmbed()
  .setAuthor(`${user.tag}`, user.avatarURL)
  .setTitle(`Nueva sugerencia`)
  .setDescription(text)
  .setColor('FF9185')
  .setFooter(`Sugerencia para ${message.guild.name}`)
  
  client.channels.get(sug).send(embed);
}
}