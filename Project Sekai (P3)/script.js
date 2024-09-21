function closeCV() {
    document.getElementById("firstCV").style.height = "0%";
    document.getElementById("navbar").style.height = "50px";

    document.body.style.overflowY = "auto";
    document.body.style.webkitOverflowScrolling = "touch";
    document.body.classList.add("custom-scrollbar");
}

document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.intro p span');

    words.forEach((word, index) => {
        word.style.animationDelay = `${3.5 + (index * 0.08)}s`; 
        word.classList.add('animated');
    });
});

function openMenu() {
    document.getElementById("toggle-menu").style.width = "350px";
}

function closeMenu() {
    document.getElementById("toggle-menu").style.width = "0";
}

var changePfp = function (event) {
    var image = document.getElementById("pfp");
    image.src = URL.createObjectURL(event.target.files[0]);
}

let isAnimating = false;
let isExpanded = false;

function toggleDL() {
  if (isAnimating) return;
  isAnimating = true;

  var elem = document.getElementById("DL-btn");
  if (isExpanded) {
    elem.classList.remove("animateHeight");
    elem.classList.add("animateHeightReverse");
  } else {
    elem.classList.remove("animateHeightReverse");
    elem.classList.add("animateHeight");
  }

  setTimeout(() => {
    isAnimating = false;
    isExpanded = !isExpanded;
  }, 500); // wait for animation to complete
}

function showCreate() {
  document.getElementById("createform").style.width = "50vh";
  document.getElementById("loginform").style.width = "0";
}

function showLogin() {
  document.getElementById("loginform").style.width = "50vh";
  document.getElementById("createform").style.width = "0";
}

function openLogin() {
  document.getElementById("bbg1").style.height = "100vh";
}

function closeLogin() {
  document.getElementById("bbg1").style.height = "0";
}

function openform() {
  document.getElementById("bbg2").style.height = "100vh";
}

function closeform() {
  document.getElementById("bbg2").style.height = "0";
}

function submitForm() {
  // Get the form data
  var username = document.getElementsByName("username")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var description = document.getElementsByName("description")[0].value;

  // Display the form data in an alert box
  alert("Username: " + username + "\nEmail: " + email + "\nDescription: " + description);
}

const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');

const validatePasswords = () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Warning: Passwords do not match!");
  }
};

// Add an event listener to the confirm password input to validate on blur
confirmPasswordInput.addEventListener('blur', validatePasswords);
