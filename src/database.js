const mysql = require('mysql');

const { promisify } = require('util');

const { database } = require('./keys');
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DB CONNECTION FINISHED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DB HAS TOO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DB CONNECTION REFUSED');
        }
    }

    if(connection) connection.release();
    console.log('DB CONNECTED!');
    return;
});

// promisify pool querys
pool.query = promisify(pool.query);

module.exports = pool;
