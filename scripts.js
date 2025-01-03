// document.getElementById('feedbackForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const feedback = document.getElementById('feedback').value;
//     console.log(feedback);
// });

document.getElementById("feedbackForm").addEventListener("submit", myFunction);

function myFunction(e) {
  e.preventDefault();

  const feedback = document.getElementById("feedback").value;
  //   console.log(feedback);

  const feedBackMessage = document.getElementById("feedbackMessage");

  let classes = document.getElementById("feedbackMessage");
  classes.className +=
    "bg-white border-solid border-2 rounded-lg border-slate-300 px-8 py-6 drop-shadow-xl shadow-neutral-300";

  feedBackMessage.innerHTML += `<p><q>${feedback}</q></p>`;

  alert("Thanks a Leaving Recomendations!");

  // Clear the form
  document.getElementById("feedbackForm").reset();
}

// Get the Button
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myButton.classList.remove("hidden");
  } else {
    myButton.classList.add("hidden");
  }
};

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);
