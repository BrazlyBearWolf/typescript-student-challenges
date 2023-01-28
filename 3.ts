const randomString: string = "im a sentence AND LOUD";

function titleCase(str: string) {
  const words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(titleCase(randomString));
