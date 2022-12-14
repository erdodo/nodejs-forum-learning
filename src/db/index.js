const FSDB = require("file-system-db");

const db = new FSDB("./db/db.json", false);
//db.backup("./db-backup.json");

module.exports = db;
