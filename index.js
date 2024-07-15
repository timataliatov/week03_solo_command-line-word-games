// Procedural FAKE! example for sending a message over the network
 
const userInput = 'Hello there!'; // This can come from an input field or the command line
const swearWords = ['swearword1', 'swearword2', 'swearword3']; // Replace with actual words
 
function start() {
  if (!userInput) throw new Error('Please write a message');
  validateMessage();
}
 
function validateMessage() {
  // Check if the message is a string
  if (typeof userInput !== 'string')
    throw new Error('The message must be a string');
 
  // Check for swear words
  for (const word of swearWords) {
    if (userInput.toLowerCase().includes(word))
      throw new Error('Error: The message contains inappropriate language.');
  }
  sendMessage();
}
 
function sendMessage() {
  // Simulating sending a message over the network
  console.log(`Message sent: ${userInput}`);
}
 
function main() {
  try {
    start();
  } catch (error) {
    console.error(error.message);
  }
}
 
main(); // Output: Message sent: Hello there!