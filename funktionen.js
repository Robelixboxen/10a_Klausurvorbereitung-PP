/* DATENSTRUKTUREN */

/* Primitives */

// let a // (var) Definition oder Deklaration

// // Wertzuweisung / Assignment
// a = true; // boolean (true, false)
// a = 2; // number

// console.log(typeof a);
// console.log(a);


/* Arrays */ // => wissen wie das geht!!!!!
// Navigation über INDEX

// let arr;
// // arr = new Array();
// arr = [true,false,false,true];
let arr = ["Hund", "Katze", "Maus", "Elefant"]  // Datentyp nicht vergessen!!!!!

// // Index beginnt mit 0 
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);
// console.log(arr[5]);

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

/* Objekte */
// Navigation über Bezeichner (keys)

// let obj = {};  // Wichtig!!!

// obj = {x:10, y:"Hi"};

// console.log(obj);
// console.log(obj.x); // Dot-Sysntax
// console.log(obj.y);

// obj = {
//         val0: 10,
//         sub1:{
//             val1: "hi",
//             val2: 2
//             }
//     }

// deep, deeper, deeeepest PP12
console.log(obj);
console.log(obj.val0);
console.log(obj.sub1.val1);  // sowas muss du können!
console.log(obj.sub1.val2);

{{{{{....}}}}} ... nested object
/*
 /*DOM*/
DOM  --> Modell der HTMl-Struktur
DOM --> Document Object Model
DOM --> nach dem Parsen / Laden der HTML-Seite  
/*********************************************************************/
// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test")); // => wissen muss!
// document.getElementById("test").innerHTML = "Hallo Text!"

/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/

/// let cond; // ??

// cond = true;
// cond = (6 > 4);
// cond = (6 < 4);
// cond = (4 == 4); // Test auf Wert  => test auf gleichheit anschauen!
// cond = (4 === "4"); // Test auf Wert UND Typ

// if (cond) {
//     console.log("Aussage wahr"); 
// } else {
//     console.log("Aussage falsch"); 
// }

   // switch (key) {
    //     case value:
    //         break;
    //     default:
    //         break;
    // }

 //   https://github.com/01-PP/03_Entscheidungsstrukturen

/* FUNKTIONEN */

1. Kapselung
test();
function test() { // Fkt.-Rumpf | body
    console.log("Testausgabe");  // => funktion schreiben, funktions rumpf, Call
}

2. return => geht zurück an den Ort von wo der Call gekommen ist
 console.log(test2());
 function test2() { // do something ...
    return "Testausgabe 2"; // Lieferung an die Stelle des calls
    console.log("Noch eine Ausgabe"); // nach return Abbruch!
 }

3. Parameter // => sollte keine Problem machen!
 console.log(test3("Robert")); // Argument(e)
 function test3(firstName) // Parameter
 { // do something ...
    return "Hallo, " + firstName; 
}

4. Fkt-Call aus Funktionen
console.log(test4("Robert")); // Argument(e)
function test4(firstName) // Parameter
{ 
   return grussformel() + firstName; 
}

function grussformel() {
   // return "Hallo, ";
    return "Hola, ";
}
// Übung Rechner ankucken!!! PP01
// rechner();
// PP06 02 nochmal anschauen



