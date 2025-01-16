const DatabaseError = function(statement, message) {
  this.statement = statement;
  this.message = message;
};
const database = {
  tables: {},
  insert(statement) {
    const regexp = /insert into ([a-z]+) \((.*?)\) values \((.*?)\)/;
    let [_, tableName, columns, values] = statement.match(regexp);
    columns = columns.split(", ");
    values = values.split(", ");
    const row = {}
    columns.forEach((column, i) => {
      row[column] = values[i]
    });
    this.tables[tableName].data.push(row);
  },
  createTable(statement) {
      const regexp = /create table ([a-z]+) \((.+)\)/;
      const parsedStatement = statement.match(regexp);
      const tableName = parsedStatement[1];
      this.tables[tableName] = {
          columns: {},
          data: []
      };
      let columns = parsedStatement[2];
      columns = columns.split(",");
      for (let column of columns) {
          column = column.trim().split(" ");
          const name = column[0];
          const type = column[1];
          this.tables[tableName].columns[name] = type;
      }
  },
  execute(statement) {
      if (statement.startsWith("create table")) {
          return this.createTable(statement);
      }
      if (statement.startsWith("insert into")) {
        return this.insert(statement);
      }
      const message = `Syntax error: "${statement}"`;
      throw new DatabaseError(statement, message);
  }
};
try {
  database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
  database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
  database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
  console.log(JSON.stringify(database, undefined, "  "));
} catch (e) {
  console.log(e.message);
}

//TESTES
const expectedDatabase = {
  "tables": {
    "author": {
      "columns": {
        "id": "number",
        "name": "string",
        "age": "number",
        "city": "string",
        "state": "string",
        "country": "string"
      },
      "data": [{
        "id": "1",
        "name": "Douglas Crockford",
        "age": "62"
      }, {
        "id": "2",
        "name": "Linus Torvalds",
        "age": "47"
      }, {
        "id": "3",
        "name": "Martin Fowler",
        "age": "54"
      }]
    }
  }
};
console.log(JSON.stringify(database, undefined, "  ") === JSON.stringify(expectedDatabase, undefined, "  "));
