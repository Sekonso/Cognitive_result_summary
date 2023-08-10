fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const category = document.querySelectorAll(".category");
    const score = document.querySelectorAll(".score");
    const scoreAvg = document.querySelector(".score-average h1");

    const categoryIcon = document.createElement("img");
    const categoryText = document.createElement("p");

    let scoreSum = 0;
    data.forEach((item, index) => {
      category[index].innerHTML = `
        <img src="${item.icon}">
        <p>${item.category}<p>
      `;
      score[index].innerText = item.score;
      scoreSum += item.score;
    });
    const average = Math.round(scoreSum / data.length);
    scoreAvg.innerText = average;
  });
