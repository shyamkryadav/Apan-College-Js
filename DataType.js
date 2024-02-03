let Student = {
  name: "shyam",
  age: 20,
  city: "janakpur",
  role: "developer",
};

console.log(Student.age, Student.city); // 20 janakpur
console.log(Student["age"]);

Student.age = 50;
Student.age = Student.age + 10;
console.log(Student.age); // 20 janakpur
