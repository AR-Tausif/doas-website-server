import db from './db';

// Function to get table schema
const getTableSchema = () => {
  const tables = [
    'category',
    'sub_category',
    'dua'
  ];

  tables.forEach(table => {
    const query = `PRAGMA table_info(${table});`;
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error(`Error getting schema for ${table}:`, err);
        return;
      }
      console.log(`\n=== ${table} table schema ===`);
      console.table(rows);
    });
  });
};

// Execute
getTableSchema();