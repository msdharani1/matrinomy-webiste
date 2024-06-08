// Populate options for days (1-31)
const daySelect = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
}

// Populate options for months (1-12 with names)
const monthSelect = document.getElementById("month");
const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${monthNames[i - 1]}`;
    monthSelect.appendChild(option);
}

// Populate options for years (1990 to current year)
const yearSelect = document.getElementById("year");
const currentYear = new Date().getFullYear();
for (let year = 1900; year <= currentYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}

// Populate options for country codes (+1 to +300)
const countryCodeSelect = document.getElementById("countryCode");
for (let code = 1; code <= 300; code++) {
    const option = document.createElement("option");
    option.value = `+${code}`;
    option.textContent = `+${code}`;
    countryCodeSelect.appendChild(option);
}
var selectElement = document.getElementById('ageFrom'); // Replace 'yourSelectId' with your actual select element ID
for (var i = 18; i <= 40; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i + ' years';
    selectElement.appendChild(option);
}
var selectElement = document.getElementById('ageTo'); // Replace 'yourSelectId' with your actual select element ID
for (var i = 18; i <= 40; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i + ' years';
    selectElement.appendChild(option);
}

const allButton = document.getElementById('all');
const menButton = document.getElementById('men');
const womenButton = document.getElementById('women');

allButton.addEventListener('click', () => {
  allButton.classList.add('active');
  menButton.classList.remove('active');
  womenButton.classList.remove('active');
});

menButton.addEventListener('click', () => {
  allButton.classList.remove('active');
  menButton.classList.add('active');
  womenButton.classList.remove('active');
});

womenButton.addEventListener('click', () => {
  allButton.classList.remove('active');
  menButton.classList.remove('active');
  womenButton.classList.add('active');
});

// mobile nav
document.getElementById('nav-icon').addEventListener('click', function() {
    const navIcon = document.getElementById('mobile-nav-links');
    const hasBlockClass = navIcon.classList.contains('hidden');
    
    if (hasBlockClass) {
      navIcon.classList.remove('hidden');
      navIcon.classList.add('block');
    } else {
      navIcon.classList.remove('block');
      navIcon.classList.add('hidden');
    }
  });