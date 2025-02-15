import {Database} from "./database.mjs";

(async function() {
    try {
        const database = new Database();
        await database.execute("create table author (id number, name string, age number, city string, state string, country string)")
        await Promise.all([
            await database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
            await database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
            await database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
        ])
        const result = await database.execute("select name, age from author");
        console.log(result);
        console.log(JSON.stringify(database, undefined, "   "));
    } catch (error) {
        console.log(error)
        
    }
})()