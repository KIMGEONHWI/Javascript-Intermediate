const mike = {
    name: "Mike",
};

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

const updateMike = update.bind(mike);

updateMike(1980, "police");
console.log(mike);