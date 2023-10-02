// const singletonObject = new Object();

const nonSingletonObject = {};

// console.log(singletonObject);
// console.log(nonSingletonObject);

(nonSingletonObject.id = "123abc"), (nonSingletonObject.name = "John");
nonSingletonObject.isLoggedIn = false;

// console.log(nonSingletonObject);

const registerUser = {
  email: "someemail@email.com",
  fullName: {
    userFullName: {
      firstName: "Mohammad",
      lastName: "Aqib",
    },
  },
};

// console.log(registerUser);
// console.log(registerUser.fullName);
// console.log(registerUser.fullName.userFullName);
// console.log(registerUser.fullName.userFullName.firstName);
// console.log(registerUser.fullName.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2);

// ...obj3

const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "L@gmail.com",
  },
  {
    id: 2,
    email: "L@gmail.com",
  },
  {
    id: 3,
    email: "L@gmail.com",
  },
];

// console.log(nonSingletonObject);

// console.log(Object.keys(nonSingletonObject));
// console.log(Object.values(nonSingletonObject));
// console.log(Object.entries(nonSingletonObject));

// console.log(nonSingletonObject.hasOwnProperty("isLoggedIn"));

// ---------------------*******de structure*******-----------------------------

const course = {
  courseName: "JavaScript",
  price: "Rs 999",
  courseInstructor: "Mohammad Aqib",
};

// course.courseInstructor;

const { courseInstructor } = course;
const { courseInstructor: ustad } = course;

console.log(courseInstructor);
console.log(ustad);

// ---------------------*******JSON*******-----------------------------
// {
//     "name" : "Mohammad Aqib",
//     "email": "<EMAIL>",
//     "courseName" : "javaScript",
//     "price" : "free"
// },

// [
//     {},
//     {},
//     {}
// ];

// https://randomuser.me/
// https://jsonformatter.org/
// https://randomuser.me/api/
