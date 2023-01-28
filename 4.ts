function truncateString({
  text,
  maxChars = 10,
}: {
  text: string;
  maxChars?: number;
}) {
  if (text.length <= maxChars) {
    return text;
  }
  return text.slice(0, maxChars) + "...";
}

console.log(truncateString({ text: "Hello!" }));
console.log(truncateString({ text: "Hello World!" }));
console.log(truncateString({ text: "Hello World!", maxChars: 20 }));
console.log(
  truncateString({ text: "Hello World! How are we today?", maxChars: 20 })
);
