import colors from "ansi-colors";

// emoji mapping because even in this virtual hellhole, symbols are needed
const emojiMap = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};

// color mapping to match the dystopian aesthetic of our lives
const colorize = {
  win: colors.green,
  lose: colors.red,
  draw: colors.yellow,
};

// get player move from command line because you have to make a choice
const playerMove = process.argv[2]?.toLowerCase();

// check if you're trying to cheat with an invalid move
if (!["rock", "paper", "scissors"].includes(playerMove)) {
  console.log(
    colors.red(
      "❌ Invalid move, you idiot. Choose rock, paper, or scissors before I lose my mind."
    )
  );
  process.exit(1);
}

// generate computer move with the randomness of your life choices
const moves = ["rock", "paper", "scissors"];
const computerMove = moves[Math.floor(Math.random() * moves.length)];

// determine the winner in this sad, pathetic game
let result;
if (playerMove === computerMove) {
  result = "draw";
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "paper" && computerMove === "rock") ||
  (playerMove === "scissors" && computerMove === "paper")
) {
  result = "win";
} else {
  result = "lose";
}

// Comments for each outcome
const winComments = [
  `${colors.green("Congrats, you won!")} Now go tell your mom, maybe she'll finally be proud of something you've done.`,
  `${colors.green("You did it!")} But don't get too excited, this is the pinnacle of your achievements.`,
  `${colors.green("Winner, winner!")} Too bad there's no chicken dinner, just another bug in your code.`,
  `${colors.green("Well done!")} Now go back to writing code no one will ever read.`,
  `${colors.green("You won!")} Your prize? More time staring at a screen.`,
];

const loseComments = [
  `${colors.red("You lost.")} But then again, you're used to disappointment, right?`,
  `${colors.red("Defeat!")} Just like your last project deployment.`,
  `${colors.red("Loser.")} Guess what? Your code still sucks.`,
  `${colors.red("Another loss.")} Just add it to the list of failures.`,
  `${colors.red("You lost.")} Even a blindfolded monkey could do better.`,
];

const drawComments = [
  `${colors.yellow("It's a draw.")} Like your career, stuck in the middle.`,
  `${colors.yellow("A tie.")} Just like those meetings that could've been an email.`,
  `${colors.yellow("Draw again.")} Seems like you're just as indecisive in life.`,
  `${colors.yellow("Stalemate.")} Because of course, nothing ever goes your way.`,
  `${colors.yellow("It's a tie.")} Just like that unmerged pull request.`,
];

// select a random comment based on the outcome
const getRandomComment = (comments) =>
  comments[Math.floor(Math.random() * comments.length)];

// construct the final message to summarize your pathetic little game
const message = `
🎮 ${colors.bold("Rock || Paper || Scissors: Developer Edition")} 🎮

You chose        : ${colors.cyan(playerMove)} ${emojiMap[playerMove]}
Computer chose   : ${colors.magenta(computerMove)} ${emojiMap[computerMove]}

${colorize[result](`${result.toUpperCase()}!`)}
${getRandomComment(
  result === "win"
    ? winComments
    : result === "lose"
    ? loseComments
    : drawComments
)}
`;

// shout out to you for playing fair, you masochist
console.log(message);
