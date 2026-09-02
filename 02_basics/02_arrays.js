const Marval_Heros = ["Thor", "Iornman" ,"spiderman"];
const Dc_Heros = ["batman", "superman", "Hulk"];

Marval_Heros.push(Dc_Heros);

//console.log(Marval_Heros);

 //const all_Heros = Marval_Heros.concat(Dc_Heros);
// console.log(all_Heros);

const all_new_Heros = [...Marval_Heros,...Dc_Heros]
//console.log(all_new_Heros);

const another_array = [1, 2, 3, 4,[4, 5, 6, ] ,6, 7, 5,[2, 2, 3]];
const real_another_array = another_array.flat(2);

//console.log(real_another_array);

console.log(Array.isArray("zaid"));
console.log(Array.from("zaid"));
console.log(Array.from({name: "zaid"}));


let scoer1 = 100
let scoer2 = 200
let scoer3 = 300

console.log(Array.of(scoer1,scoer2,scoer3));

