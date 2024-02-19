/***********************************
 * 나머지 매개변수
 * user 객체를 만들어 주는 생성자 함수를 만들겁니다.
 ***********************************/

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "Html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1); // User { name: 'Mike', age: 30, skills: [ 'Html', 'css' ] }
console.log(user2); // User { name: 'Tom', age: 20, skills: [ 'JS', 'React' ] }
console.log(user3); // User { name: 'Jane', age: 10, skills: [ 'English' ] }