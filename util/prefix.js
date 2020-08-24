const db = require("megadb")
let prefix_db = new db.crearDB('prefixes')

module.exports = {
  config: {
    nombre: "prefix",
    alias: [],
    descripcion: "",
    uso: ""
  },
  run: async(client, message, args) => {
  let prefix = prefix_db.tiene(`${message.guild.id}`) ? await prefix_db.obtener(`${message.guild.id}`) : '.';
  
  message.channel.send(`El prefix de este servidor es: \`${prefix}\``)
}
}