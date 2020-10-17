const { psql } = require('./config.js');

psql.connect();

psql.query("INSERT INTO test('text') VALUES('Hello World!')");
