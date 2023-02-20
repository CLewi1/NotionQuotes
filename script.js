// Define an array of quotes
const quotes = [
	"Even your shadow leaves you at night... ",
	"Don't tell me the sky is the limit when there are footprints on the moon.",
	"A dream is worth nothing if you leave it on the pillow.",
	"Don't fear the next chapter, you already know the author.",
	"Average is the enemy, success is your responsibility, and change can happen in an instant, if you are willing to flip the switch.",
	"Give a man a purpose and the ability to achieve it, and he will crawl over broken glass with a smile.",
	"You don't become confident by shouting affirmations in the mirror. But by having a stack of undeniable proof that you are who you say you are. Outwork your self doubt.",
	"All exceptional and mentally strong people have been through hell. Very few put themselves through hell when life is great.",
	"You are always afraid to take the first step because all you see is every negative thing 10 miles down the road. But you can do anything you want. You are bound by nothing.",
	"If it was easy, everyone would do it.",
	"Believe in yourself and all that you are. Know there is something inside you that is greater than any obstacle.",
	"There are two people. The man who thinks they can, and the man who thinks they can't. They're both right.",
	"Your life is a reflection of your thoughts. If you want to change your life, change your thoughts.",
	"You can't win the war against the world if you can't win the war against your own mind.",
	"Bravery is not the absence of fear. Bravery is feeling fear and moving forward anyway.",
	"Dreams without goals are just dreams. And dreams are cheap.",
	"Why take life so seriously? You're not going to get out alive anyway.",
	"Life is not about finding yourself. Life is about creating yourself.",
	"One day it will all make sense. So for now, laugh at the confusion, smile through the tears, and keep reminding yourself that everything happens for a reason.",
	"You get what you work for, not what you wish for.",
	"Excuses make today easy, but tomorrow hard. Discipline makes today hard, but tomorrow easy.",
	"You are the only person who can make this work. You are also the only person who can fuck this up. It's you vs you.",
	"If you try, you risk failure. If you don't try, you guarantee it.",
	"Watch your thoughts, they become your words. Watch your words, they become your actions. Watch your actions, they produce your future.",
	"Let the past die. Kill it if you have to. That's the only way to become what you were meant to be.",
	"You may be in your darkest hour. Know that night don't last forever. There's a morning coming in your life.",
	"Change your mindset today. Stop bitching. No ones listening. Nobody gives a fuck. Stop expecting shit. And take what's yours, by having the humility to put in the work.", 
	"Every man has 2 lives. The second one starts when he realizes he only has one.",
  ];
  
  // Get a reference to the quote element
  const quoteElement = document.getElementById("quote");
  
  // Define a function to generate a random quote
  function generateQuote() {
	// Get a random quote from the quotes array
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	// Update the quote element with the new quote
	quoteElement.innerText = randomQuote;
  }
  
  // Call the generateQuote function once to display an initial quote
  generateQuote();
  
  // Add a click event listener to the quote element to change the quote on click
  quoteElement.addEventListener("click", generateQuote);
  
