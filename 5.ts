function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

console.log(slugify("hello i am alive"));
