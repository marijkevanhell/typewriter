const sentence = "hello there from lighthouse labs\n";

let delay = 0;
//iterate through each character in the sentence
for (const char of sentence) {
  setTimeout(() => {
    //print characters in a line
    process.stdout.write(char)
    //calls delay from above
  }, delay)
  //delay of 50ms between each character being printed out
  delay += 50;
}