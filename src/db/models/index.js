import Review from "./Review.js"
import Product from "./Product.js"
import Category from "./Category.js"
import User from "./User.js"
import ProductCategory from "./ProductCategory.js"

Product.hasMany(Review,{
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Review.belongsTo(Product,{
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

User.hasMany(Review,{
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Review.belongsTo(User,{
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

Product.belongsToMany(Category, {
  through: { model: ProductCategory, unique: false },
});
Category.belongsToMany(Product, {
  through: { model: ProductCategory, unique: false },
});



export default { Review, Product, Category, User, ProductCategory };