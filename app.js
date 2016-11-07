var quotes = [
  "\"You know, sometimes I think I was born with a leak, and any goodness I started with just slowly spilled out of me and now its all gone. And I will never get it back in me. It is too late. Life is a series of closing doors, isn't it?.\"",
  "\"I'm responsible for my own happiness? I can't even be responsible for my own breakfast.\"",
  "\"If the holocaust happened every four years, like the Olympics, that would be better than this.\"",
  "\"Every day it gets a little easier. But you have to do it every day. That's the hard part. But it does get easier.\"",
  "\"My life is a mess right now and I compulsively take care of other people when I don't know how to take care of myself.\"",
  "\"Well, That's the problem with life, right? Either you know what you want and you don't get what you want, or get what you want, and then you don't know what you want.\"",
  "\"I don’t understand how people…live. It’s amazing to me that people wake up every morning and say, ‘Yeah, another day, let’s do it!’ How do people do it?\"",
  "\"This is all that I am and all I’m ever going to be.\"",
]

function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var element = document.getElementById('quoteDisplay');
  element.removeChild(element.firstChild);
  var child = document.createElement('div');
  child.className = "animated fadeInUp";
  child.innerHTML = quotes[randomNumber];
  element.appendChild(child);
}

window.onload = newQuote;
