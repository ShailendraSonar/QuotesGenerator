quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");

//authorName  = document.querySelector(".author .name");

//random quote function 
 function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading quote...";
    //fetching randon quotes from the api and parsing it into javascript
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
        console.log(result);
        document.getElementById("quotes").innerHTML=result.content;
        document.getElementById("names").innerHTML=result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
};

//buttons
soundBtn.addEventListener("click", ()=>{
    //its an api for speech
    let utterance = new SpeechSynthesisUtterance(`${document.getElementById("quotes").innerHTML} by ${document.getElementById("names").innerHTML}` );
    speechSynthesis.speak(utterance);//speech emtthod of speechsynthesis
});

copyBtn.addEventListener("click", ()=>{
    //copying button
    navigator.clipboard.writeText(document.getElementById("quotes").innerHTML);

});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `http://twitter.com/intent/tweet?url=${ document.getElementById("quotes").innerHTML}`;
    window.open(tweetUrl, "_blank");//apen a page

});

quoteBtn.addEventListener("click", randomQuote);