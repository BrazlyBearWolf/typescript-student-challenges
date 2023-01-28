function slugify(str: string) {
  return str.trim().toLowerCase().replace(/\s+/g, "-");
}
console.log(slugify("   hello i am alive    "));
