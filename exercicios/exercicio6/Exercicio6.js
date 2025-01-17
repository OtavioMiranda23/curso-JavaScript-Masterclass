const DatabaseError = function(statement, message) {
  this.statement = statement;
  this.message = message;
};
const database = {
  tables: {},
  createTable(statement) {
      const regexp = /create table ([a-z]+) \((.+)\)/;
      const parsedStatement = statement.match(regexp);
      let [,tableName, columns] = parsedStatement;
      this.tables[tableName] = {
          columns: {},
          data: []
      };
      columns = columns.split(",");
      for (let column of columns) {
          column = column.trim().split(" ");
          const [name, type] = column;
          this.tables[tableName].columns[name] = type;
      }
  },
  insert(statement) {
      const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
      const parsedStatement = statement.match(regexp);      
      let [,tableName, columns, values] = parsedStatement;
      columns = columns.split(", ");
      values = values.split(", ");
      let row = {};
      for (let i = 0; i < columns.length; i++) {
          const column = columns[i];
          const value = values[i];
          row[column] = value;
      }
      this.tables[tableName].data.push(row);
  },
  select(statement) {
    const regexSelect = /select ([\w, ]+) from ([\w]+)(?: where (.+))?/;
    const parsedStatement = statement.match(regexSelect);
    let [_, columns, tableName, where] = parsedStatement;
    columns = columns.split(", ");
    const allSelected = this.tables[tableName].data.map(row => {
      const findedItems = {};
      columns.forEach(column => {
        findedItems[column] = row[column];
      })
      return findedItems;
    })    
    if(!where) return allSelected;
    const [columnWhere, valueWhere] = where.split(" = ");
    const dataFilterByWhere = this.tables[tableName].data.filter(row => row[columnWhere] === valueWhere)
    const findedItemsWhere = dataFilterByWhere.map(data => {
      const findedItems = {};
      columns.forEach(column => {
        findedItems[column] = data[column];
      })
      return findedItems;
    })
    return findedItemsWhere;
  },
  execute(statement) {
      if (statement.startsWith("create table")) {
          return this.createTable(statement);
      }
      if (statement.startsWith("insert")) {
          return this.insert(statement);
      }
      if (statement.startsWith("select")) {
        return this.select(statement);
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
  console.log(database.execute("select name, age from author"));
  console.log(database.execute("select name, age from author where id = 1"));
  console.log(JSON.stringify(database, undefined, "  "));
} catch (e) {
  console.log(e.message);
}

//TESTES
const firstExpect = [{
  "name": "Douglas Crockford",
  "age": "62"
}, {
  "name": "Linus Torvalds",
  "age": "47"
}, {
  "name": "Martin Fowler",
  "age": "54"
}];

const secondExpect = [{
  "name": "Douglas Crockford",
  "age": "62"
}, ]

console.log(JSON.stringify(database.execute("select name, age from author")) === JSON.stringify(firstExpect));
console.log(JSON.stringify(database.execute("select name, age from author where id = 1")) === JSON.stringify(secondExpect))

