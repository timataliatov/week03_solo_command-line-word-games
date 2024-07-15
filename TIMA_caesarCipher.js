import colors from "ansi-colors";

// get phrase and shift because we need something to mess with
var phrase = process.argv[2]; // phrase to encrypt
var shift = parseInt(process.argv[3]); // amount to shift

// check if troll or not
if (!phrase || isNaN(shift)) {
  console.log(colors.red("❌ please provide a phrase and a shift number.   ||   example: node caesarCipher.js 'phrase' shift"));
  process.exit(1);
}

// define a function to shift a char because why not?
function shiftChar(char, shift) {
  var code = char.charCodeAt(0);  // get unicode value
  
  // if uppercase, let's mess with it
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((((code - 65 + shift) % 26) + 26) % 26) + 65);
  }
  // if lowercase, same deal 
  else if (code >= 97 && code <= 122) {
    return String.fromCharCode(((((code - 97 + shift) % 26) + 26) % 26) + 97);
  }
  // if something else, we just don't care
  else {
    return char;
  }
}

// here’s where the magic happens, for each char in the phrase, we twist it
var encryptedPhrase = "";
for (var i = 0; i < phrase.length; i++) {
  encryptedPhrase += shiftChar(phrase[i], shift); // add shifted char to encrypted phrase
}

// ta-da! your phrase is now encrypted. good luck, nsa!
console.log(colors.green(encryptedPhrase));

// because you’re too lazy to encrypt it yourself, here's a summary:
console.log(`\n${colors.bold("alice’s dark encryption wonderland")} 🔒`);
console.log(`${colors.cyan("original phrase:")} "${phrase}"`);
console.log(`${colors.magenta("shift amount:")} ${shift}`);
console.log(`${colors.green("encrypted phrase:")} "${encryptedPhrase}"`);

// random dark humor to keep you entertained
const humorQuotes = [
  "🔐 Your secrets are now safer than a politician's conscience.",
  "🧩 This encryption is more puzzling than a Rubik's cube on steroids.",
  "🤖 Your phrase is now as readable as binary code to a caveman.",
  "🌀 Congratulations, your phrase is now more twisted than a soap opera plot.",
  "🎭 This encryption is like Shakespeare on a bad acid trip.",
  "🔓 If anyone cracks this, they deserve a medal and a padded cell.",
  "👾 Your phrase is now as clear as a Windows 95 error message.",
  "🚀 Encryption level: Elon Musk's next rocket destination.",
  "🕵️‍♂️ Good luck, Sherlock, even Holmes would struggle with this one.",
  "👻 Your phrase is now spookier than a midnight seance.",
  "🤯 This encryption will leave your brain more scrambled than your morning eggs.",
  "🎩 You've just turned your phrase into a magician's trick: now you see it, now you don't.",
  "📜 If this makes sense to you, consider yourself officially mad.",
  "🧠 Your phrase is now as comprehensible as quantum mechanics to a toddler.",
  "💣 This encryption is more explosive than a Michael Bay movie.",
  "🕸️ Your phrase is now caught in the web of confusion.",
  "🌪️ Encryption so intense, it could cause a tornado in a teacup.",
  "🎢 Welcome to the rollercoaster of encryption – hold on to your sanity.",
  "🌑 Your phrase is now as dark and mysterious as a black hole.",
  "🚨 Warning: Your phrase is now encrypted beyond human understanding.",
  "🎲 Your phrase is now a gamble – only the luckiest will decipher it.",
  "🌌 Your phrase is now floating somewhere in the digital cosmos.",
  "🎩 This encryption trick would baffle even Houdini.",
  "🧙‍♂️ Your phrase is now hidden by a spell even Gandalf can't break.",
  "🌉 Your phrase is now more encrypted than the CIA's secrets.",
  "🎮 Your phrase is now a level boss in the game of encryption.",
  "📡 Your phrase is now as detectable as a stealth bomber.",
  "🧛 Your phrase is now as elusive as a vampire in daylight.",
  "👽 This encryption is more alien than Area 51's secrets.",
  "🧨 Your phrase is now a ticking time bomb of confusion.",
  "🧩 Your phrase is now the final piece in the puzzle of insanity.",
  "🎢 This encryption is a wild ride – not for the faint-hearted.",
  "🌈 Your phrase is now as elusive as the end of a rainbow."
];


const randomQuote = humorQuotes[Math.floor(Math.random() * humorQuotes.length)];
console.log(colors.blue(randomQuote));
