const dotevnt = require("dotenv");

dotevnt.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.production",
});

module.exports = {
  "type": process.env.DB_CLIENT,
  "host": process.env.DB_HOST,
  "database": process.env.DB_DATABASE,
  "entities": [process.env.TYPEORM_ENTITIES],
  "migrations": [process.env.TYPEORM_MIGRATION],
  "cli": {
    "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR,
    "entitiesDir": process.env.TYPEORM_ENTITIES_DIR,
  }
}
