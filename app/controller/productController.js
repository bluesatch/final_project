const ProductDao = require("../dao/productDao");
const ControllerCommon = require("../common/controllerCommon");

class ProductController {

    constructor() {
        this.productDao = new ProductDao(); // DAO = data access object
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.productDao.findAll()
        .then(this.common.findSuccess(res))
        .catch(this.common.findError(res));
    }

    findById(req, res) {
        let id = req.params.id;
        this.productDao.findById(id)
        .then(this.common.findSuccess(res))
        .catch(this.common.findError(res));
    }
}

module.exports = ProductController;