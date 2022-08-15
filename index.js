function randomDiceNumber() {
  diceNum = Math.floor(Math.random() * 6) + 1;
  return diceNum;
}

function imgNameGenarator(num) {
  imgName = "images/" + "dice" + num + ".png";
  return imgName;
}

dice1 = randomDiceNumber();
dice2 = randomDiceNumber();

if (dice1 > dice2) {
  document.querySelector(".heading").textContent = "🚩 Player 1 Wins";
  document.querySelector(".heading").classList.add("smaller");
}
else if (dice1 === dice2) {
  document.querySelector(".heading").textContent = "Draw 🙃";
  document.querySelector(".heading").classList.add("smaller");
}
else {
  document.querySelector(".heading").textContent = "Player 2 Wins 🚩";
  document.querySelector(".heading").classList.add("smaller");
}

img1_src = imgNameGenarator(dice1);
document.querySelector(".img1").setAttribute("src", img1_src);

img2_src = imgNameGenarator(dice2);
document.querySelector(".img2").setAttribute("src", img2_src);
