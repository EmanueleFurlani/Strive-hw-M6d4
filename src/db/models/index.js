import Review from "./Review.js"
import Product from "./Product.js"
import Category from "./Category.js"
import User from "./User.js"
import ProductCategory from "./ProductCategory.js"

Product.hasMany(Review);
Review.belongsTo(Product);

User.hasMany(Review);
Review.belongsTo(User);

Product.belongsToMany(Category, {
  through: { model: ProductCategory, unique: false },
});
Category.belongsToMany(Product, {
  through: { model: ProductCategory, unique: false },
});



export default { Review, Product, Category, User, ProductCategory };