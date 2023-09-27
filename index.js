const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#mobile-navbar');
const headline = document.querySelector('#headline');
const body = document.querySelector('body');
const projectsDiv = document.getElementById('works');
const popupOverlay = document.querySelector('#popup-overlay');
const projectCards = [
  {
    name: 'YoYacht',
    date: '2023',
    type: 'React Front-End',
    description:
      'YoYacht is an app for booking an appointment to try a yacht; accounts or sign-ups required.',
    image: './images/yachtBookingApp2.png',
    technologies: ['html', 'Tailwind', 'React', 'Ruby on Rails'],
    'live link': 'https://yacht-booking-app.onrender.com',
    'source link': 'https://github.com/lugard1/myportfolio2',
  },
  {
    name: 'Budget APP',
    date: '2023',
    type: 'React Front-End',
    description:
      'The budget app is a mobile web application where a user can manage budget; accounts or sign-ups required.',
    image: './images/budgetAppForPortfolio.png',
    technologies: ['Rails', 'Bootstrap', 'Postgres'],
    'live link': 'https://budget-app-8r1m.onrender.com/',
    'source link': 'https://github.com/lugard1/budget-app',
  },
  {
    name: 'Weather APP',
    date: '2022',
    type: 'React Front-End',
    description:
      'Weather App is a React-based weather forecasting app that provides users with information about countries.',
    image: './images/weatherForecastApp.png',
    technologies: ['React', 'css', 'javaScript'],
    'live link': 'https://weather-forecast-appi.onrender.com',
    'source link': 'https://github.com/lugard1/weather-forecast-app',
  },
  {
    name: "Space Traveler's Hub",
    date: '2022',
    type: 'React Front-End',
    description:
      '  An App that provides commercial and scientific space travel services, for users rockets bookings and missions.',
    image: './images/spaceTravelersHub.png',
    technologies: ['React', 'Redux', 'CSS'],
    'live link': 'https://space-travellers-hub-l24h.onrender.com',
    'source link': 'https://github.com/lugard1/space-travellers-hub',
  },
  {
    name: 'Math Magicians',
    date: '2023',
    type: 'React Front-End',
    description:
      '  An SPA project with three pages: the Home page, Calculator Page, Quote page for simple calculations.',
    image: './images/mathMagician.png',
    technologies: ['React', 'JavaScript', 'CSS'],
    'live link': 'https://math-magicians-ii.onrender.com/',
    'source link': 'https://github.com/lugard1/math-magicians-ii',
  },
  {
    name: 'Book Store',
    date: '2022',
    type: 'React Front-End',
    description:
      'Book Store is a React app, that allows user to see a book list, update a book, and also delete book from the book list.',
    image: './images/bookStore.png',
    technologies: ['React', 'Redux', 'CSS'],
    'live link': 'https://bookstorei.onrender.com/',
    'source link': 'https://github.com/lugard1/book-storei',
  },
];

hamburger.addEventListener('click', () => {
  headline.classList.toggle('active');
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => link.addEventListener('click', () => {
  headline.classList.remove('active');
  hamburger.classList.remove('active');
  navBar.classList.remove('active');
  body.classList.remove('active');
}));

projectCards.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project';
  projectCard.innerHTML = `<img class='project-screenshot' src='${
    project.image
  }' alt='screenshot of YoYacht project'> <div class='project-div'> <h2 class='project-title'>${
    project.name
  }</h2> <p class='project-info'> <span class='project-company'>React Front-End</span> <span><img src='./images/Counter.png' alt=' '></span> <span class='project-type'>Back End Dev</span> <span><img src='./images/Counter.png' alt='counter'></span> <span class='project-year'>${project.date}</span> </p> <p class='project-description'>${
    project.description
  }</p> <ul class='project-languages'>${project.technologies
    .map((tech) => `<li class='language'>${tech}</li>`)
    .join('')}</ul> <button class='enabled-btn'>See Project</button> </div>`;
  projectsDiv.appendChild(projectCard);
});
// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  popupOverlay.style.display = 'none';
};

window.onclick = function modal(e) {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
};

// Add popup modal dynamically
function populatePopupWindow(index) {
  const myPopup = projectCards[index];
  popupOverlay.innerHTML = ` <div id="popup-content">
  <div id="popup-title">
    <h2>${myPopup.name}</h2>
    <div class="close-btn" onclick="closeModal()">&times;</div>
  </div>
  <p class="project-info">
    <span class="project-company">${myPopup.type}</span>
    <span><img src="./images/Counter.png" alt="counter"></span>
    <span class="project-type">Back End Dev</span>
    <span><img src="./images/Counter.png" alt="counter"></span>
    <span class="project-year">${myPopup.date}</span>
  </p>
  <img id="popup-img" src="${myPopup.image}" alt="project screenshot">
  <div id="popup-details">
    <p id="popup-description">${myPopup.description}</p>
    
      <div id="btn-container">
      <button class="btn-main"> <span class="btn-popup">See Live</span>
      <a  target="_blank" rel="noopener" href="${myPopup['live link']}">

      <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="btn-main"><span class="btn-popup">See Source</span>
        <a target="_blank" rel="noopener" href="${myPopup['source link']}"><i class="fa-brands fa-github"></i></a> </button>
      </div>
     
    
  </div>
</div>`;
  popupOverlay.style.display = 'block';
}

const projectBtn = document.querySelectorAll('.project .enabled-btn');
projectBtn.forEach((btn) => btn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  body.classList.add('active');
  populatePopupWindow(Array.prototype.indexOf.call(projectBtn, btn));
}));

function showMessage(input, message) {
  const msg = input.parentNode.querySelector('small');
  const emailInput = document.getElementById('email');
  msg.innerText = message;

  // modify the class for the input

  msg.className = 'error';
  emailInput.className = 'error-box';
}
// Function to show error

function showError(input, message) {
  return showMessage(input, message, false);
}

// Check if email is in lowercase

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();
  if (!(email === String(email).toLowerCase())) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact-form');

const EMAIL_INVALID = 'Enter email in lowercase';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form

  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);

  // if valid, submit the form.

  if (emailValid) {
    form.submit();
  }
});