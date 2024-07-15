import colors from "ansi-colors";

// get phrase because we need something to twist
var englishPhrase = process.argv.slice(2).join(" ");

// check if troll or not
if (!englishPhrase) {
  console.log(colors.red("❌ please provide an english phrase to translate."));
  process.exit(1);
}

// operation ==> "if a character is a vowel"
function isVowel(char) {
  return ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) !== -1;
}

// operation ==> "translate a word"
function translateToPigLatin(word) {
  if (isVowel(word[0])) {
    return word + "way";
  } else if (!isVowel(word[0]) && !isVowel(word[1])) {
    return word.slice(2) + word.slice(0, 2) + "ay";
  } else {
    return word.slice(1) + word[0] + "ay";
  }
}

// split the phrase into words, because we need to mess with each one
var words = englishPhrase.split(" ");
var translatedWords = [];

// here’s where the madness happens, we twist each word
for (var i = 0; i < words.length; i++) {
  translatedWords.push(translateToPigLatin(words[i]));
}

// join the translated words into a beautifully twisted phrase
var pigLatinPhrase = translatedWords.join(" ");

// ta da! your phrase is now in pig latin, enjoy the confusion
console.log(colors.green(pigLatinPhrase));

// because you’re too lazy to translate it yourself, here's a summary:
console.log(`\n${colors.bold('ℹ️ s u m m a r y ℹ️')}`);
console.log(`${colors.cyan("original phrase:")} "${englishPhrase}"`);
console.log(`${colors.magenta("pig latin phrase:")} "${pigLatinPhrase}"`);

// random dark humor to keep you entertained
const humorQuotes = [
  "🐷 Congratulations, your phrase is now as useful as a screen door on a submarine.",
  "🌪️ If confusion was your goal, you just nailed it.",
  "🌀 Your phrase is now more twisted than a politician's promise.",
  "🃏 Welcome to the realm of nonsense, where logic comes to die.",
  "🔄 This translation is as clear as mud.",
  "🎩 Your Pig Latin phrase is about as comprehensible as quantum physics to a goldfish.",
  "📜 You've just created a linguistic monstrosity. Well done!",
  "🔓 If this makes sense to you, seek help immediately.",
  "🧩 Your phrase is now as organized as a teenager's bedroom.",
  "🌙 Congrats, you just invented a new way to baffle people.",
  "🚀 Your translation is out of this world – and not in a good way.",
  "🎉 Your phrase is now more twisted than a pretzel in a hurricane.",
  "🕵️ If someone deciphers this, they're either a genius or completely insane.",
  "👽 Welcome to Pig Latin, where words go to get weird.",
  "🤯 Your phrase just entered the twilight zone of language.",
  "👻 Your translation is scarier than a bad horror movie.",
  "🎭 This phrase is now as coherent as a drunk Shakespeare.",
  "💥 You just created a word salad. Bon appétit!",
  "🧟 Your phrase has been zombified – it’s neither alive nor dead.",
  "🤡 Welcome to the circus of confusion. Enjoy the show!",
];

const randomQuote = humorQuotes[Math.floor(Math.random() * humorQuotes.length)];
console.log(colors.blue(randomQuote));
