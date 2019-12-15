module.exports = {
  development: {
    db: {
      dialect: "sqlite",
      storage: "./db.development.sqlite",
      logging: false
    },
    port: 3000
  },
  test: {
    db: {
      dialect: "sqlite",
      storage: "./db.test.sqlite",
      logging: false
    },
    port: 3000
  }
};
