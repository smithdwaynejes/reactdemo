module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://agility:Test@1234@localhost:5432/sammy'
    },
    test: {},
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  }