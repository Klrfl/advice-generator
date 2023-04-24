const adviceIdEl = document.getElementById("advice-id");
const adviceParagraphEl = document.getElementById("advice-paragraph");

const generateAdviceBtn = document.getElementById("cta");

generateAdviceBtn.addEventListener("click", () => {
  getAdvice();
});

// idk what happened but this API endpoint has a problem with caching
async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data = await response.json();

  adviceIdEl.innerText = data.slip.id;
  adviceParagraphEl.innerText = data.slip.advice;
}
