/*   TYPING ANIMATION */

let typed = new Typed(".typing", {
    strings: [
      "",
      "Backend Developer",
      "Frontend Developer",
      "Web Designer",
      "Internship Student",
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
  });



  /*   Side Bar */




  
  const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Function to show the active section and update the navigation
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    
    // Hide sidebar after clicking a section
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);

  
});

// Sidebar toggling logic
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}


function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  
  // Toggle the class on the style switcher to move it down
  document.querySelector(".style-switcher").classList.toggle("sidebar-open");
  
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}



function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  console.log("Sending email with the following data:");
  console.log("name: ", name);
  console.log("email: ", email);
  console.log("subject: ", subject);
  console.log("message: ", message);

  emailjs.send("service_9pbh9w1", "template_4j5d87a", {
      name: name,
      email: email,
      subject: subject,
      message: message
  })
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
  }, function(error) {
      console.log('FAILED...', error);
      alert("Failed to send the message. Please try again later.");
  });
}
