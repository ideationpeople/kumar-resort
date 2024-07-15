// Replace with your Firebase configuration from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBZTBqH_MLOOGpo8jG0to7NLSZcFJjsBPQ",
    authDomain: "unwind-7c2d6.firebaseapp.com",
    databaseURL: "https://unwind-7c2d6.firebaseio.com",
    projectId: "unwind-7c2d6",
    storageBucket: "unwind-7c2d6.appspot.com",
    messagingSenderId: "47864247180",
    appId: "1:47864247180:web:8fa0a199c313e7c1f9dca9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  // Reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  // Event listener for form submission
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    // Get values from form inputs
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    // Save message to Firebase
    saveMessages(name, emailid, msgContent);
  
    // Display and hide alert
    var alertElement = document.querySelector(".alert");
    alertElement.style.display = "block";
    setTimeout(() => {
      alertElement.style.display = "none";
    }, 3000);
  
    // Reset the form
    document.getElementById("contactForm").reset();
  }
  
  // Function to save messages to Firebase
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent
    });
  };
  
  // Function to get element value by ID
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  