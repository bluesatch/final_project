//load database & database config

const database = require('../config/dbconfig');

//load bluebird promise
const Promise = require('bluebird');

class Common {
    findAll(sqlRequest) {
        return new Promise(
            function(resolve, reject) {
                database.db.all(sqlRequest, 
                function (err, rows) {
                    if (err) {
                        reject(
                            new DaoError(20, "Internal server error")
                        );
                    } else if (rows === null || rows.length === 0) {
                        reject(
                            new DaoError(21, "Entity not found")
                        );
                    } else {
                        resolve(rows);
                    }
                });
            }
        );
    }
    run(sqlRequest, sqlParams = {}) {
        return new Promise(function(resolve, reject) {
            let stmt = database.db.prepare(sqlRequest);
            stmt.run(sqlParams, function(err, rows){
                if (err) {
                    reject(
                        new DaoError(20, "Internal server error")
                    );
                } else if (rows === null || rows.length === 0) {
                    reject(
                        new DaoError(21, "Entity not found")
                    );
                } else {
                    resolve(rows);
                }
                if(this.changes === 1) {
                    resolve(true);
                } else if (this.changes === 0) {
                    reject(new DaoError(21, "Entity not found"))
                } else {
                    reject(new DaoError(11, "Invalid argument"));
                }
            });
        });
    }
}
class DaoError {
    construtor(errorCode, message) {
        this.errorCode = errorCode;
        this.messager = message;
    }
}

module.exports = Common;
