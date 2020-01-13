module.exports = 
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "apaxdb",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "dialectModule": require('mysql2'),
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
