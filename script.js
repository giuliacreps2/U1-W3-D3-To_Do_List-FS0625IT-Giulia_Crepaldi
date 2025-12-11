//Passaggi per creare la funzione:
//1)il testo viene inserito una volta cliccata la freccia (click)
//2)il testo viene inserito come li nuovo nella ul (for)

const generateNewTask = function () {
  const arrow = document.getElementsByClassName("far fa-arrow-alt-circle-right");
  arrow.addEventListener("click", function () {
    const li = document.createElement("li");
    li.appendChild(li);
  });
};

//Passaggi per creare la funzione:
//1)il testo viene inserito una volta cliccata la freccia (click)
//2)il testo viene inserito come li nuovo nella ul  for(let i=0; i<)
