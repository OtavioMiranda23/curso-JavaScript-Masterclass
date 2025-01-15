
const database = {
  tables: {},
  createTable(statement) {
    if (!statement.startsWith("create table")) throw new Error("Statement not starts with 'create table'")
    const regexp = /create table ([a-z]+) \((.+)\)/;
    const parsedStatement = statement.match(regexp);
    const tableName = parsedStatement[1];
    let columns = parsedStatement[2];
    columns = columns.split(",");
    this.tables[tableName] = {
      columns: {},
      data: []
    }
    for (let column of columns) {
      column = column.trim().split(" ");
      const name = column[0];
      const type = column[1];
      this.tables[tableName].columns[name] = type;
    }
    return JSON.stringify(database, undefined, "  ");
  },
  execute(statement) {
    return this.createTable(statement);
  }
};


//TESTE
const expectResult = {
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
      "data": []
    }
  }
}
const statementTest = "create table author (id number, name string, age number, city string, state string, country string)";
console.log(database.execute(statementTest));
console.log(database.execute(statementTest) === JSON.stringify(expectResult, undefined, "  "));
