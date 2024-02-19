const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.apply(mike, [1999, 'singer'])
console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }

update.apply(tom, [2002, 'teacher']); 
console.log(tom); // { name: 'Tom', birthYear: 2002, occupation: 'teacher' }