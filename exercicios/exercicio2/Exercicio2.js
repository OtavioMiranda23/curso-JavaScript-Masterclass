
const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regexp);
const tableName = parsedStatement[1];
const database = {
  tables: {
    [tableName]: {
      columns: {
      },
      data: []
    }
  }
};
let columns = parsedStatement[2];
columns = columns.split(", ");
for (let column of columns) {
  const [key, value] = column.split(" ");
  database.tables[tableName].columns[key.trim()] = value.trim();
};
function getDatabase(database) {
  return JSON.stringify(database, undefined, " ");
}

//TESTE
const databaseExpect = {
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
console.log('database:', getDatabase(database));
console.log('database expect:', getDatabase(database) === JSON.stringify(databaseExpect, undefined, " "));

