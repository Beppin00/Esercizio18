let btn = document.getElementById("calcola");

let budget = 1000;
document.getElementById("budget").innerHTML = `Il budget iniziale è ${budget}$`;

btn.addEventListener("click", function () {

  do {
    let sottrazione = Math.floor(Math.random() * 200);

    document.write(`Hai speso ${sottrazione}<br>`);
    document.write(`Nel portafoglio hai ${budget}<br>`);
    document.write(`<br>`);
    budget -= sottrazione;

  } while (budget > 200);
});