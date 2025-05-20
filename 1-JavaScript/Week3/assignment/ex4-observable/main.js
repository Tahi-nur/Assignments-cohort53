import { createObservable } from './ex4-observable.js';

// A subscriber function: logs message in UPPERCASE
function consoleUpperCase(message) {
  console.log(message.toUpperCase());
}

// Another subscriber: logs message in lowercase
function consoleLowerCase(message) {
  console.log(message.toLowerCase());
}

// Create the observable system
const observable = createObservable();

// Subscribe 3 functions
observable.subscribe(console.log);
observable.subscribe(consoleUpperCase);
observable.subscribe(consoleLowerCase);

// Send a message to all subscribers
observable.notify("Let's see what happens here!");
