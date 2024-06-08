let dropdown = document.querySelector(".search-filters")


function drop(){
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// age

document.addEventListener("DOMContentLoaded", function() {
    var ageFrom = document.getElementById("ageFrom");
    var ageTo = document.getElementById("ageTo");

    for (var i = 18; i <= 60; i++) {
        var optionFrom = document.createElement("option");
        optionFrom.value = i;
        optionFrom.text = i;
        ageFrom.appendChild(optionFrom);

        var optionTo = document.createElement("option");
        optionTo.value = i;
        optionTo.text = i;
        ageTo.appendChild(optionTo);
    }

    ageFrom.addEventListener("change", function() {
        var fromValue = parseInt(ageFrom.value);
        ageTo.innerHTML = ""; // Clear existing options
        for (var i = fromValue; i <= 60; i++) {
            var optionTo = document.createElement("option");
            optionTo.value = i;
            optionTo.text = i;
            ageTo.appendChild(optionTo);
        }
    });
});


// height

document.addEventListener("DOMContentLoaded", function() {
    var heightFrom = document.getElementById("heightFrom");
    var heightTo = document.getElementById("heightTo");

    function populateHeightDropdown(selectElement, startFeet, startInch, endFeet, endInch) {
        for (var feet = startFeet; feet <= endFeet; feet++) {
            for (var inch = 0; inch < 12; inch++) {
                if (feet === startFeet && inch < startInch) continue;
                if (feet === endFeet && inch > endInch) break;

                var option = document.createElement("option");
                option.value = `${feet}ft ${inch}in`;
                option.text = `${feet}ft ${inch}in`;
                selectElement.appendChild(option);
            }
        }
    }

    populateHeightDropdown(heightFrom, 4, 0, 7, 11);
    populateHeightDropdown(heightTo, 4, 0, 7, 11);

    heightFrom.addEventListener("change", function() {
        var [fromFeet, fromInch] = heightFrom.value.split("ft ").map(x => parseInt(x));
        heightTo.innerHTML = ""; // Clear existing options
        populateHeightDropdown(heightTo, fromFeet, fromInch, 7, 11);
    });
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