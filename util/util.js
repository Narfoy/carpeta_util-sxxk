const db = require("megadb")
let users_premium = new db.crearDB("users_premium");

module.exports = {
  config: {
    nombre: "util",
    alias: []
  },
  run: async (client, message, args) => {
    let users = users_premium.get(``)
  }
}