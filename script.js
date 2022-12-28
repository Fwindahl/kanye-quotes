const kanyeQuote = document.getElementById("kanye-quote");
const btn = document.getElementById("change-quote");
const noDisplay = document.getElementById("no-display");

async function getData() {
  const response = await fetch("https://api.kanye.rest");
  const data = await response.json();
  console.log(data);
  kanyeQuote.innerText = data.quote;
  noDisplay.style.display = "block";
}
btn.addEventListener("click", () => {
  getData();
});

// function isPersonOfAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPersonOfAge(18));
