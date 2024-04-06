const button = document.getElementById("btn");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");

button.onclick = () => {
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;
  const random3 = Math.floor(Math.random() * 6) + 1;

  dice1.textContent = random1;
  dice2.textContent = random2;

  dice3.textContent = random3;

};
