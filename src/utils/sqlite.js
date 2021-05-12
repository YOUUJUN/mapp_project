export default {

    //数据库是否为打开状态
    isOpenDB(name, path){
        let isOpen = plus.sqlite.isOpenDatabase({
            name,
            path
        });
        console.log('是否已经打开数据库',isOpen);

        return isOpen
    },


    closeDB(name){
        return new Promise((resolve, reject)=>{
            plus.sqlite.closeDatabase({
                name,
                success : (result) =>{
                    console.log('关闭数据库成功');
                    resolve(result);
                },
                fail : (err) => {
                    console.error('关闭数据库失败');
                    reject(err);
                }
            })
        });

    },

    //打开数据库
    openComDB(name, path){
        return new Promise((resolve, reject)=>{
            console.log('plus',plus.sqlite);
            plus.sqlite.openDatabase({
                name,
                path,
                success (e){
                    resolve(e);
                },
                fail (e){
                    reject(e);
                }
            })
        })
    },

    executeSQL(name, sql){
        return new Promise((resolve, reject) => {
            plus.sqlite.selectSql({
                name,
                sql,
                success(e){
                    resolve(e);
                },
                fail(e){
                    reject(e);
                }
            })
        })
    },

    async isTableExit(baseName, tableName){
        let sql = `SELECT count(*) AS count FROM sqlite_master WHERE type="table" AND name = "${tableName}"`;
        let results = await this.executeSQL(baseName, sql);
        if(results[0].count && results[0].count > 0){
            return true;
        }

        return false;
    },

    createTableCarSQL : `
        CREATE TABLE IF NOT EXISTS car(
            ID INT PRIMARY KEY  NOT NULL,
            CAR_OWNER_NAME TEXT NOT NULL,
            CAR_OWNER_PHONE INTEGER,
            CAR_OWNER_CODE TEXT,
            CAR_NO TEXT NOT NULL,
            CAR_KIND TEXT,
            ESTIMATE_AMOUNT REAL
            IN_DATE TEXT
        )
    `
}
