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
      const regexp = /select (.+) from ([a-z]+)(?: where (.+))?/;
      const parsedStatement = statement.match(regexp);
      let [, columns, tableName, whereClause] = parsedStatement;
      columns = columns.split(", ");
      let rows = this.tables[tableName].data.filter(function (row) {
          if (!whereClause) return true;
          let [column, value] = whereClause.split(" = ");
          return row[column] === value;
      });
      rows = rows.map(function (row) {
          const selectedRow = {};
          columns.forEach(function (column) {
              selectedRow[column] = row[column];
          });
          return selectedRow;
      });
      return rows;
  },
  delete(statement) {
    const regexp = /delete from ([a-z]+)(?: where (.+))?/;
    const parsedStatement = statement.match(regexp);
    let[, tableName, whereClause] = parsedStatement;
    const[columnWhere, valueWhere] = whereClause.split(" = ");
    const rows = this.tables[tableName].data;
    const filterRows = rows.filter(row => row[columnWhere] !== valueWhere);
    this.tables[tableName].data = filterRows;
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
      if (statement.startsWith("delete")) {
        return this.delete(statement);
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
  database.execute("delete from author where id = 2");
  console.log(database.execute("select name, age from author"));
} catch (e) {
  console.log(e.message);
}

//TESTES
const expect = [{
  "name": "Douglas Crockford",
  "age": "62"
}, {
  "name": "Martin Fowler",
  "age": "54"
}];
console.log(JSON.stringify(database.execute("select name, age from author")) === JSON.stringify(expect));