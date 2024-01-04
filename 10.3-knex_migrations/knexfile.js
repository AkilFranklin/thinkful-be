const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection:
      "postgres://thinkful_gifts_hpv1_user:Kys6vP6HVVbXPwtH2t3AESsLbXYPX8Cd@dpg-cmbfo3ocmk4c73dgep30-a.oregon-postgres.render.com/thinkful_gifts_hpv1?ssl=true",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
