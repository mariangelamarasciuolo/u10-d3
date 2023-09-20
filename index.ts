let variab: number;
variab = 20;
// myVar = "Mary" ERRORE
//non posso dare una stringa al myVar perché sopra ho definito il valore come numb
// lo stesso vale per gli altri primitivi come boolean, null, undefined.

const sum = (numb1, numb2) => {
  const n1 = parseInt(numb1);
  const n2 = parseInt(numb2);
  if (!isNaN(n1) && !isNaN(n2)) {
    return numb1 + numb2;
  } else {
    return "inserisci due numeri";
  }
};
console.log(sum(50, 6));

//function

const sumWithTS = function (num1: number, num2 = 1) {
  return num1 + num2;
};

sumWithTS(5); // il secondo parametro è un default value, non serve passarlo per forza

const mixedAddition = (par1: number | string, par2: number | string) => {
  if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
    return par1 + par2;
  } else {
    return "parametri misti, passa due numeri per ottenere il risultato" + par1.toString();
  }
};

// in questa funzione abbiamo dichiarato che i valori devono essere solo stringhe e numeri, se i valori non corrispondono
//ad essi allora non saranno accetati

// il tipo unknown si modifica in base al contesto che verrà utilizzato, in questo caso boolean e string
let maybe: unknown;

if (maybe === true) {
  const myBoolean: boolean = maybe; // :boolean
}

if (typeof maybe === "string") {
  const myNewString: string = maybe; // :string
}

//GLI ARRAY
//per quanto riguarda gli array possiamo abbreviare string |number in "StringOrNumber"
const myArray: StringOrNumber[] = [];
myArray.push("ciao");
myArray.push(0);

const myArray2 = [1];
myArray2.push(0);
console.log(myArray);

myArray2.forEach((n) => n.toString());

const myArray3: (string | undefined)[] = []; // l'array è vuoto e gli assegnamo il tipo string[] manualmente
myArray3.push("uno");
myArray3.push("due");
myArray3.push("tre");

myArray3.forEach((s) => s?.length);

//TUPLA
// Una tupla in TypeScript è come una lista con regole rigide.
//Hai una serie di "caselle" in cui puoi mettere diversi tipi di cose, come numeri, testi o altri dati.
//L'importante è che tu decida in anticipo quanti elementi ci saranno nella lista e quale tipo avranno.
const myTuple: [number, string] = [0, ""];
const myTupleOfThree: [number, boolean, string] = [0, true, ""];
myTupleOfThree[2].concat("yes");

//questa invece non è una tupla, non forza il tipo in una data posizione, e non ci forza il numero massimo di elementi
const notATuple: (boolean | string | number)[] = ["Stefano", 50, true];
notATuple[0].toString();
