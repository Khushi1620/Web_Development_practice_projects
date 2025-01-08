const motivationalQuotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Don’t limit your challenges. Challenge your limits. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "If you want to achieve greatness stop asking for permission. — Anonymous",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Success is walking from failure to failure with no loss of enthusiasm. — Winston Churchill",
    "Your limitation—it’s only your imagination. — Anonymous"
  ];
const button = document.querySelector('button');
button.addEventListener ('click', ()=> {
    const text = document.getElementById('quote');
    const index = Math.floor(Math.random()*motivationalQuotes.length);
    text.textContent = motivationalQuotes[index];
});