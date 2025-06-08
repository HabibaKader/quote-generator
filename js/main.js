const quotes = [
  { text: "Do not take life too seriously. You will not get out alive.", author: "Elbert Hubbard" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin" },
  { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
  { text: "Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend", author: "Albert Camus" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
  { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
  { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
  { text: "Life is what happens to us while we are making other plans.", author: "Allen Saunders" },
];

let remainingQuotes = [...quotes];

document.getElementById("new-quote-btn").addEventListener("click", () => {
  if (remainingQuotes.length === 0) {
    alert("No more new quotes available!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
  const quote = remainingQuotes.splice(randomIndex, 1)[0];

  document.getElementById("quote-text").textContent = `"${quote.text}"`;
  document.getElementById("quote-author").textContent = `--${quote.author}`;
});
