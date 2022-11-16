document.getElementById("next-btn").addEventListener("mousedown", fetchAdvice);
const quote = document.getElementById("text");
const quoteId = document.getElementById("number");

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
        cache: "reload",
    });
    const data = await response.json();
    const { slip } = data;
    quote.innerText = slip.advice;
    quoteId.innerText = slip.id;
}