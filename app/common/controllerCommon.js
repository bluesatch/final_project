class controllerCommon {
    
    findSuccess(res) {
        return (result) => {
            res.status(200);
            res.json(result);
        }
    }

    findError(res) {
        return (error) => {
            res.status(404);
            res.json(error);
        }
    }
}

module.exports = controllerCommon;