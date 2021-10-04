const removeDuplcate = (str) => {
  return str
    .split("")
    .filter((item, pos, self) => {
      return self.indexOf(item) === pos;
    })
    .join("");
};

console.log(removeDuplcate("alagcgcdodol"));
