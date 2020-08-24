const Discord = require("discord.js");
const db2 = require("quick.db");
const db = require("megadb")
let levels_db = new db.crearDB("niveles");

module.exports = {
  config: {
    nombre: "profile",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async (bot, message, args) => {
 
  let user = message.mentions.users.first() || message.author;

  let xp = await levels_db.obtener(`${user.id}.xp`)
  let nivel  = await levels_db.obtener(`${user.id}.nivel`)
  if (nivel === undefined) {nivel = 0}
  if (xp === undefined) {nivel = 0}
  let levelup = 5 * (nivel ** 2) + 50 * nivel + 100

  let money = await db2.fetch(`money_${user.id}`)
  if (money === null) money = 0;

  let bank = await db2.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;
  
  let robos = await db2.fetch(`rob_${user.id}`)
  if (robos === null) robos = 0;
  
  let pats = await db2.fetch(`pats_${user.id}`)
  if (pats === null) robos = 0;
  
  if (xp === null) xp = 0;
  if (xp === undefined) xp = 0;
  let moneyEmbed = new Discord.RichEmbed()
  .setTitle(user.tag)
  .setThumbnail(user.avatarURL)
  .setColor("FF9185")
  .addField('Perfil',
  `<:nivel:722938159284879382> **Nivel:** ${nivel} (${xp}/${levelup} XP)\n<:rank:722938125491634186> **Rank: **`)
  .addField('Stats',
  `<:caricias:722938204491219036> **Pats: ${pats}**\n<:ladron:722938073846906883>** Robos: ${robos}**\n:skull: **Muertes: **`, true)
  .addField('Inventario',
  `<:msmoneda:722923318109274132> **Coins:** ${money}\n<:baul:722938295134453890> **Banco:** ${bank}\n<:mochila:722938255217131531> **Items: **`, true)
  .addField('Matrimonio',
  ``)
  
  message.channel.send(moneyEmbed)
}
}