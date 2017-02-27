//Contructor Functions

//1. Create an array called bands with 3 objects in it. Each of them describes
// a music band. Each object should have a name, genre, and numberOfPerformers.
// The first should be The Beatles, the second, Miles Davis, the third
// Dixie Chicks .
var bands;

//2. Now create a constructor function called Band. Have it take in a name, genre,
// numberOfPerformers, and numberOfGroupies. Set the keys to have the value of
// the parameters using the this keyword.
var Band;

//3. Now create those same bands you made before using the constructor function
// Band using the new keyword. Plug in the values for each of the object keys as
// arguments.
var bandsWithConstructor;

//Now create a new array called newBands and push each of the objects that you
// made into that array.

//Alright, you have created new objects using a constructor function. Let's say
// we want to add a new key to the constructor function. To do so, go ahead and
// create a method called bandInfo using the prototype method for the Band
// constructor. Let's have the bandInfo method alert the band's name and their
// music genre.

module.exports = {
  bands: bands,
  Band: Band,
  bandsWithConstructor: bandsWithConstructor,
  // Add more exports for more tests
}
