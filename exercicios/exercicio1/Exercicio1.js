const sql = "create table author (id number, name string, age number, city string, state string, country string)";
const sqlList = sql.split(" ");
const tableIndex = sqlList.findIndex((el) => el === "table");
const tableName = sqlList[tableIndex + 1];
const regex = /\(([^)]+)\)/gm;
const matchRegex = regex.exec(sql)[1]
const columns = matchRegex.split(",").map(column => column.trim());

function isEqualArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((value, i) => value === arr2[i]);
}

//TESTES
const columnsExpected = [ 'id number','name string','age number','city string','state string','country string'];
console.log('columns is equal:', isEqualArray(columns, columnsExpected));
console.log('columns:', columns);
console.log('tableName is equal:', tableName === "author");
console.log('tableName:', tableName);
