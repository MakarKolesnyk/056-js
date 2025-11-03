// const mult = (a=1, b=2) => a * b;
// console.log(mult(4,5));
// console.log(mult());

// const getPerimetrSquare = (side) => side *4
// console.log(getPerimetrSquare(5));

// const isAdult = (age, AGE_ADULT = 18) =>
//   age >= AGE_ADULT ? "adult" : "not adult";
// console.log(isAdult(17));

const site = {
  title: "my site",
  headers: ["qwe1", "qwe2", "qwe3"],
  showHeaders() {
    this.headers.forEach((elem) => {
      console.log(elem, this.title);
    });
  },
  //  showHeadersAndTitile() {
  //   this.headers.forEach(function (elem) {
  //     console.log(elem, this.title);
  //   });
  // },
};

site.showHeaders();
