

const card = document.querySelector(".card");

// creo un array con una lista della spesa 

const myList = ["milk", "fruit", "bread", "fish", "potatos", "vegetables", "pop-corn for this evening"];


// creo un contatore 

i = 0;

// fino a che il contatore (0) è inferiore alla llista, esegui il ciclo while 

while(i < myList.length) {
  i++;

  if(i == myList.length - 1) card.innerHTML = myList.join(', ').toUpperCase();

}





