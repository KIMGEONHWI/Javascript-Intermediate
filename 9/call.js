const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

showThisName(); // undefined
showThisName.call(mike); // Mike
showThisName.call(tom); // Tom

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.call(mike, 1999, 'singer')
console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }

update.call(tom, 2002, 'teacher'); 
console.log(tom); // { name: 'Tom', birthYear: 2002, occupation: 'teacher' }