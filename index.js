// Write your code in this file!
const currentUser = 'Liza';

const welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;
console.log(welcomeMessage);

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);

// const firstInitial = currentUser[0];
//const restOfName = currentUser.slice(1);
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}  !`;
console.log(shortGreeting);
