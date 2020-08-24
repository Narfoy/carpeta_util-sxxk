const Discord = require("discord.js")

module.exports = {
  config: {
    nombre: "userinfo",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: (client, message, args) => {
  let server = message.guild;
  let estadouser = {


   "online":"Online", 
   "idle":"Ausente",
   "dnd":"No Molestar",
   "invisible":"Invisible/Desconectado",
 } 


let userm = message.mentions.users.first()

if(!userm){
  var user = message.author;

  const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .addField('Información del Usuario', `**Usuario**: ${user.tag}\n**Nick**: ${user.username}\n**ID**: ${user.id}`, true)
    .addField('Estado', `**Estado**: ${estadouser[user.presence.status]}\n**Juego**: ${user.presence.game != null ? user.presence.game.name : "Nada"}\n**Color**: eee`, true)
    .addField('Membresía', `**Discord**: ${user.createdAt.toDateString()}\n**${server.name}**: ${message.member.joinedAt.toDateString()}\n**Roles**: ${message.member.roles.map(roles => `${roles}`).join(', ')}`)
    .setColor('FF9185')

  message.channel.send(embed);
}else{
  
  const embed = new Discord.RichEmbed()
    .setThumbnail(userm.avatarURL)
    .addField('Información del Usuario', `**Usuario**: ${userm.tag}\n**Nick**: ${userm.username}\n**ID**: ${userm.id}`, true)
    .addField('Estado', `**Estado**: ${estadouser[userm.presence.status]}\n**Juego**: ${userm.presence.game != null ? userm.presence.game.name : "Nada"}\n**Color**: eee`, true)
    .addField('Membresía', `**Discord**: ${userm.createdAt.toDateString()}\n**${server.name}**: ${message.member.joinedAt.toDateString()}\n**Roles**: ${message.member.roles.filter(a => a.name !== "@everyone").map(roles => `${roles.name}`).join(', ')}`)
    .setColor('FF9185')

  message.channel.send(embed)
}
}
}