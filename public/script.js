// const submitBtn = document.querySelector("#submit-btn");
// const accountForm = document.getElementById("account-form");
// const getapi = document.querySelector(".getApi");
// const apiBtn = document.querySelector(".apiBtn");

// // console.log(getapi);
// // console.log(apiBtn);
// // console.log(submitBtn);
// // console.log(accountForm);

// accountForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let formControl = document.querySelectorAll(".form-control");

//   let username = formControl[1];
//   let firstname = formControl[2];
//   let lastname = formControl[3];
//   let age = formControl[4];
//   let password = formControl[5];

//   console.log(username, firstname, lastname, age, password);

//   let tcCheckbox = document.getElementsByClassName("checkbox")[0];

//   // (3) Validate the data
//   let errors = [];

//   if (username.value.length === 0) {
//     errors.push("Please enter username!");
//   }
//   if (firstname.value.length === 0) {
//     errors.push("Please enter first name!");
//   }
//   if (lastname.value.length === 0) {
//     errors.push("Please enter lastname!");
//   }
//   if (age.value.length === 0) {
//     errors.push("Please enter your age!");
//   }
//   if (tcCheckbox.checked === false) {
//     errors.push("Please read and accept terms & conditions!");
//   }

//   // Reset both user-errors and user-success
//   // let errorsBox = document.getElementsByClassName("user-errors")[0];
//   // let successBox = document.getElementsByClassName("user-success")[0];

//   // errorsBox.style.display = "none";
//   // errorsBox.innerHTML = "";

//   // successBox.style.display = "none";

//   // if (errors.length > 0) {
//   //   errorsBox.style.display = "block";
//   //   errorsBox.innerHTML = errors.join("<br/>");
//   // } else {
//   //   successBox.style.display = "block";
//   //   successBox.innerHTML = "You have registered successfully!";
//   // }

//   // POSSIBILITY TO USE FOREACH TO LOOP THE INPUT

//   // formControl.forEach((item) => console.log(item));

//   // let formData = new FormData(accountForm);

//   // console.log([...formData]);
//   const url = "http://localhost:3000/api/v1/users/register";

//   axios
//     .post(url, {
//       username: username.value,
//       firstname: firstname.value,
//       lastname: lastname.value,
//       age: age.value,
//       password: password.value,
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// });

// apiBtn.addEventListener("click", () => {
//   const url = "http://localhost:3000/api/v1/users";
//   try {
//     axios
//       .get(url)
//       .then((res) => {
//         const data = res.data;
//         let displayMenu = data.map((item) => {
//           const { username, firstname, lastname, age } = item;
//           return `
//       <div class="m-2">
//         <div class="card">
//           <div class="card-body">
//             <p class="h6"> your username is ${username}, your firstname is ${firstname}, your lastname is ${lastname} and your age is ${age} </p>
//           </div>
//         </div>
//       </div>`;
//           // getapi.innerHTML = display;
//           console.log(username, firstname, lastname, age);
//         });
//         displayMenu = displayMenu.join(" ");

//         getapi.innerHTML = displayMenu;
//         console.log(displayMenu);
//       })
//       .catch((err) => console.log(err));
//   } catch (error) {
//     console.log(error);
//   }
// });

const formControl2 = document.querySelectorAll(".form-control2");
// console.log(formControl2);

const loginBtn = document.querySelector("#submit-btn2");
console.log(loginBtn);

loginBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("i was clicked");
});
