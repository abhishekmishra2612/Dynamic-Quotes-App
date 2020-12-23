        

// Scripting.......

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById('btn');
const tweet = document.getElementById("tweet");


let realData = "";
let quoteData = "";
let length_arr = 0;

const getNewQuotes = () => {
    let num = Math.floor(Math.random() * ((length_arr - 1) - 0));
    quoteData = realData[num];
    quote.innerText = `${quoteData.text}`;
    if (quoteData.author == null) {
        author.innerText = 'By: UnKnown';
    }
    else {
        author.innerText = `By: ${quoteData.author}`;
    }
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        console.log(realData.length)
        length_arr = realData.length;
        getNewQuotes();

    } catch (error) { }
}

const tweetNow = () =>{
    let tweetpost = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
    window.open(tweetpost)
}

getQuotes();
btn.addEventListener("click", getNewQuotes);
tweet.addEventListener("click", tweetNow);