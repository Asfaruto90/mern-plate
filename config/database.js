const typeorm = require('typeorm');

const dataSrc = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    port: "",
    username: "test",
    password: "admin",
    database: "test",
});

console.log();