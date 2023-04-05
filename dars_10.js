
let users = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];



let ar = users.filter((a) => a.year < 2000);
console.log(ar);

// =======================================
console.log('=======================================================');
let arr = users.filter(b => b.year > 2009);
console.log(arr);

// =======================================
console.log('=======================================================');

let arr_1 = users.sort((value, key) => value.engine - key.engine);
console.log(arr_1);

// =======================================
console.log('=======================================================');

let sort = users.sort((value, key) => value.year - key.year);
console.log(sort);

// =======================================
console.log('=======================================================');


let ism = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(ism);

// =======================================
console.log('=======================================================');


let filter_1 = users.filter((value) => value.year < 2000);


let mapping = filter_1.map(value => {
  return {...value, status: "eski"}
});

console.log(mapping);
// ========================================
console.log('=========================================================');


let filter_2 = users.filter((value) => value.year > 1998 !== value.year > 2010);
let map = filter_2.sort((a, b) => a.year - b.year).map((value) => {
    return { ...value, status: "o'rta" };
  });

console.log(map);

// ========================================
console.log('=========================================================');

let filter_3 = users.filter((value) => value.year > 2010 !== value.year > 2023);
let table = filter_3.map((value) => {
  return { ...value, status: "yangi" };
});

console.log(table);

// ==========================================
console.log('============================================================');

const onDelete = (ids) => {
    let nodelet = users.filter(value => value.id !== ids);
    users = nodelet.sort((a, b) => a.id - b.id)
}

onDelete(7)
console.log(users);