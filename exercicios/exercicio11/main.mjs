import { Database } from './database.mjs';

try {
  const database = new Database();
  database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  Promise.all([
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)"),
  ]).then(() => database.execute("delete from author where id = 2"))
  .then(() => database.execute("select name, age from author"))
  .then(result => console.log(JSON.stringify(result, null, '  ')))
} catch (e) {
  console.log(e.message);
}