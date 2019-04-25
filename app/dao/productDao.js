const Product = require('../model/product');
const daoCommon = require('../common/daoCommon');

class ProductDao {
    constructor() {
        this.common = new daoCommon();
    }

    findAll() {
        let sqlRequest = "SELECT * FROM product"; 
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for (const row of rows) {
                products.push(new Product(
                    row.product_id,
                    row.artist,
                    row.album,
                    row.label,
                    row.price,
                    row.img
                ));
            }
            return products;
        });
    }
    findById(id) {
        let sqlRequest = "SELECT * FROM product WHERE id=$id"; 

        let sqlParams = {
            $id: product_id
        }

        return this.common.run(sqlRequest, sqlParams).then(rows => {
            let products = [];
            for (const row of rows) {
                products.push(new Product(
                    row.product_id,
                    row.artist,
                    row.album,
                    row.label,
                    row.price,
                    row.img
                ));
            }
            return products;
        });
    }
}

module.exports = ProductDao;