// setTimeout(() => {
//   console.log("two seconds are up");
// }, 2000);

// const names = ["Andrew", "Jen", "Jess"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
