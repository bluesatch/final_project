class Product {
    constructor(product_id, artist, album, label, price, img) {
        this.product_id = product_id;
        this.artist = artist;
        this.album = album;
        this.label = label;
        this.price = price;
        this.img = img;
    }
}

module.exports = Product;