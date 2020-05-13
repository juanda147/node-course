// Object property shorthand

const name = "Juan";
const userAge = 34;

const user = {
  name,
  age: userAge,
  location: "Medellin",
};

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// alias for label: productLabel
// default value for rating
// const { label: productLabel, stock = 5 } = product;

// console.log(label);
// console.log(stock);

const transaction = (type, { label, stock = 0} = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
