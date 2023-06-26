let availableKey = [
  "HTML",
  "CSS",
  "Web design",
  "Web development",
  "Javascript",
  "coding in javascript",
  "Where to learn coding",
  "How to create website",
];

const resultBox = document.querySelector(".resultBox");
const inputBox = document.getElementById("inputBox");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKey.filter((Key) => {
      return Key.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);
  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selesctInput(this)>" + list + "<li>";
  });
  resultBox.innerHTML = "<ul>" + content.join("") + "<ul>";
}

function selesctInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
