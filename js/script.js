/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By: Eric Ehlert
Which grade I am going for: Exceeds Expectations
******************************************/


var quoteInterval;

//The array of quote objects with different properties

var quotes = [
  {
    quote: "Talk is cheap. Show me the code.",
    source: "Linus Torvalds",
    tag: "humor",
    year: "2000"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    source: "Harold Abelson",
    citation: "Structure and Interpretation of Computer Programs",
    year: "1985",
    tag: "wise saying"
  },
  {
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    source: "John Woods",
    year: "1992",
    tag: "humor"
  },
  {
    quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    source: "Rick Cook",
    citation: "The Wizardry Compiled",
    tag: "humor",
    year: "1989"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    tag: "wise saying"
  },
  {
    quote: "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    source: "Larry Niven",
    year: "1982"
  },
  {
    quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    source: "Muhammad Waseem",
    tag: "humor"
  },
  {
    quote: "Truth can only be found in one place: the code.",
    source: "Robert C. Martin",
    citation: "Clean Code: A Handbook of Agile Software Craftsmanship"
  }
];

// Starting the interval
theInterval();

/***
  The getRandomQuote() function gets a random quote of the "quotes" array
  and returns it for further usage.
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var newQuote = quotes[randomNumber];
  return newQuote;
}


//The getRandomColor() function gets (obviously) a random color and returns it.

function getRandomColor() {
  var r = Math.floor(Math.random() * 160);
  var g = Math.floor(Math.random() * 160);
  var b = Math.floor(Math.random() * 160);
  var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
  return randomColor;
}

// Clearing the recent interval and starting a new one.

function theInterval() {
  clearInterval(quoteInterval);
  quoteInterval = setInterval(printQuote, 20000);
}

/***
  The printQuote() function gets a random quote by calling the getRandomQuote()
  function, stores the minimum requirement (the quote itself and the source)
  in the "html" variable and checks if there are more properties to add to the
  "html" string. Lastly it sets the "quote-box" element to the "html" variable.
***/

function printQuote() {
  // Getting a new Quote by calling the getRandomQuote() function
  var newQuote = getRandomQuote();
  // Adding the necessary html string
  var html = "";
  html += '<p class="quote"> ' + newQuote['quote'] + ' </p>';
  html += '<p class="source"> ' + newQuote['source'];
  if (newQuote['citation']) {
    html += '<span class="citation"> '+ newQuote['citation'] + '</span>';
  }
  if (newQuote['year']) {
    html += '<span class="year"> ' + newQuote['year'] + '</span>';
  }
  if (newQuote['tag']) {
    html += '<span class="tag"> ' + newQuote['tag'] + '</span>';
  }
  html += '</p>';
  // Setting the "quote-box" element to the "html" string
  document.getElementById('quote-box').innerHTML = html;
  // Setting a random background color
  document.body.style.background = getRandomColor();
}

/***
  Adding the event listener so the quotes change by clicking the button and
  the timer starts. This makes sure the quotes don't change through the timer
  even though the user is actively changing the quotes
***/

document.getElementById('loadQuote').addEventListener("click", theInterval, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
