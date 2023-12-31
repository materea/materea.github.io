const words = ["I am", "You are", "We are",],
  colors = ["blue", "green", "yellow",],
  text = document.querySelector(".text");

// Generator (iterate from 0-3)
function* generator() {
  var index = 0;
  while (true) {
    yield index++;

    if (index > 2) {
      index = 0;
    }
  }
}

// Printing effect
function printChar(word) {
  let i = 0;
  text.innerHTML = "";
  text.classList.add(colors[words.indexOf(word)]);
  let id = setInterval(() => {
    if (i >= word.length) {
      deleteChar();
      clearInterval(id);
    } else {
      text.innerHTML += word[i];
      i++;
    }
  }, 500);
}

// Deleting effect
function deleteChar() {
  let word = text.innerHTML;
  let i = word.length - 1;
  let id = setInterval(() => {
    if (i >= 0) {
      text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
      i--;
    } else {
      text.classList.remove(colors[words.indexOf(word)]);
      printChar(words[gen.next().value]);
      clearInterval(id);
    }
  }, 300);
}

// Initializing generator
let gen = generator();

printChar(words[gen.next().value]);


// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Event listener for the toggle switch
const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");
darkModeToggle.addEventListener("change", toggleDarkMode);

// Check the user's preferred color scheme and set initial state
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkMode) {
  darkModeToggle.checked = true;
  toggleDarkMode();
}