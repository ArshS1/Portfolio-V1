// animation effect for hovering over project

// project 1 animation
document
  .getElementById("imageContainer")
  .addEventListener(
    "mouseover",
    () => (document.getElementById("description").style.opacity = "1")
  );
document
  .getElementById("imageContainer")
  .addEventListener(
    "mouseleave",
    () => (document.getElementById("description").style.opacity = "0")
  );

// project 2 animation
document
  .getElementById("imageContainer2")
  .addEventListener(
    "mouseover",
    () => (document.getElementById("description2").style.opacity = "1")
  );
document
  .getElementById("imageContainer2")
  .addEventListener(
    "mouseleave",
    () => (document.getElementById("description2").style.opacity = "0")
  );

// connect the database and start sending contact form data to firebase
const firebaseConfig = {
  apiKey: "AIzaSyApJOE3f9LRRWbqLu8xsTlsDbXQ9IFCwIY",
  authDomain: "contact-form-87411.firebaseapp.com",
  databaseURL: "https://contact-form-87411-default-rtdb.firebaseio.com",
  projectId: "contact-form-87411",
  storageBucket: "contact-form-87411.appspot.com",
  messagingSenderId: "650858346002",
  appId: "1:650858346002:web:ab1dc3191368d20340cacb",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference database
var contactForm = firebase.database().ref("contactForm");

// send information to database
document
  .getElementById("contactForm")
  .addEventListener("submit", formSubmission);

function formSubmission(e) {
  e.preventDefault();
  // store the values from the form
  let name = getValue("name");
  let email = getValue("email");
  let message = getValue("message");

  // save the information
  saveInformation(name, email, message);

  // reset the form
  document.getElementById("contactForm").reset();
}

function getValue(id) {
  return document.getElementById(id).value;
}

function saveInformation(name, email, message) {
  // make sure that the form isn't empty during data submission
  if (name !== "" && email !== "" && message !== "") {
    let newInformation = contactForm.push();
    newInformation.set({
      name: name,
      email: email,
      message: message,
    });
    document.getElementById("messageData").innerHTML = "Successfully Submitted";
    document.getElementById("messageData").style.opacity = "1";
  } else {
    document.getElementById("messageData").innerHTML =
      "*Please fill out the form completely*";
    document.getElementById("messageData").style.opacity = "1";
  }
}
