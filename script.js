document.addEventListener("DOMContentLoaded", function () {
  const inputArea = document.querySelector(".inputArea");
  const nameInput = document.getElementById("nameInput");
  const greetButton = document.getElementById("greetButton");
  const greetingMessage = document.getElementById("greetingMessage");
  const currentTimeDisplay = document.getElementById("currentTime");

  greetButton.addEventListener("click", function () {
    const name = nameInput.value;
    if (name) {
      greetingMessage.textContent = `Hello, ${name}!`;
      greetingMessage.style.color = "green";
      inputArea.classList.add("hidden");
    } else {
      greetingMessage.textContent = "Please enter your name.";
      inputArea.classList.remove("hidden");
    }
  });

  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    currentTimeDisplay.textContent = `Current time: ${timeString}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
