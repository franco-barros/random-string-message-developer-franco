const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Superman its cool",
  "Batman! (this commit has no parents)",
  "deadpool its the best",
  "¡Hoy es un gran día para aprender algo nuevo!",
  "With great power comes great responsibility. Spider-Man",
  "It's not who I am underneath, but what I do that defines me. Batman",
  "I can do this all day. Captain America",
  "The answers you seek shall be yours, once I claim whats mine. Thor",
  "I am Iron Man.  Iron Man",
  "Heroes are made by the path they choose, not the powers they are graced with. Green Lantern",
  "In brightest day, in blackest night, no evil shall escape my sight. Green Lantern",
  "Sometimes you have to run before you can walk. Iron Man",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
