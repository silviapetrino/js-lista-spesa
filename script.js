// 1. prendo la mia card 

const card = document.querySelector(".card");

// 2. creo un array con una lista della spesa 

const myList = ["milk", "fruit", "bread", "fish", "potatos", "vegetables", "pop-corn for this evening"];


//3. creo un contatore 

i = 0;

//4. fino a che il contatore (0) è inferiore alla lista, esegui il ciclo while 

while(i < myList.length) {
  const listElement = myList[i];

  i++;
 
  //5.  se il contatore è uguale alla lunghezza della lista, stampala

  if(i === myList.length) card.innerHTML = myList.join(', ').toUpperCase();

}





