const quotes = [
	"Believe you can and you're halfway there. -Theodore Roosevelt",
	"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
	"Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
	"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. -Norman Vincent Peale",
	"Perfection is not attainable, but if we chase perfection we can catch excellence. -Vince Lombardi",
	"Believe that life is worth living and your belief will help create the fact. -William James",
	"You miss 100% of the shots you don't take. -Wayne Gretzky",
	"Don't watch the clock; do what it does. Keep going. -Sam Levenson",
	"Success is walking from failure to failure with no loss of enthusiasm. -Winston Churchill",
	"The only way to do great work is to love what you do. -Steve Jobs"
];

const quoteElem = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	quoteElem.innerHTML = randomQuote;
}

// Call generateQuote function when page loads
generateQuote();

generateBtn.addEventListener("click", generateQuote);

setInterval(generateQuote, 3600000);
