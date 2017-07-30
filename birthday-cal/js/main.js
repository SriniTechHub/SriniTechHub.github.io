/*
*To Avoid cluttering of global namespace we are using self-invoking function
*/
var birthdayCal = (function() {

 /*
 * declaration of the variable
 * birdayData: to store json we are getting from textarea
 * selectedYear: to store year entered in input field
 * weekday array: to find birthday in current year
 * segregatedCal object: to segregate json values to respective days.
 */

    var birthdayData, selectedYear,
        weekday = new Array("sun", "mon", "tue", "wed", "thu", "fri", "sat"),
        segregatedCal = {
            "sun": [],
            "mon": [],
            "tue": [],
            "wed": [],
            "thu": [],
            "fri": [],
            "sat": []
        };
/*
* getDimensions: function receives birthdayCount of day as
* parameter and returns each person element width and height.
*/

    function getDimensions(arrLen) {
        var dimensions = Math.ceil(Math.sqrt(arrLen));
        return Math.round(100/dimensions * 100) / 100+"%";
    }
/*
* renderCal: function clears all previously rendered data and populates fresh data into day cards.
*/
    function renderCal() {
        var allPeopleEle = document.querySelectorAll("li[data-day] .day__people");
        for (var j = 0; j < allPeopleEle.length; j++) {
            allPeopleEle[j].innerHTML = '';
        }

        for (var key in segregatedCal) {
            var birthdayCount = segregatedCal[key].length;
            if (birthdayCount === 0) {
                var noBirthDayContainerEle = document.querySelectorAll("li[data-day=" + key + "]")[0];
                var birthdayInfoEle = document.querySelectorAll("li[data-day=" + key + "] b")[0];
                noBirthDayContainerEle.className += " day--empty";
                birthdayInfoEle.innerText = "No birthdays";
            } else {
                for (var i = 0; i < birthdayCount; i++) {
                    var birthDayContainerEle = document.querySelectorAll("li[data-day=" + key + "]")[0];
                    var peopleEle = document.querySelectorAll("li[data-day=" + key + "] .day__people")[0];
                    var personEle = document.createElement("div");
                    var birthdayInfoEle = document.querySelectorAll("li[data-day=" + key + "] b")[0];
                    var widthAndHeight = getDimensions(birthdayCount);
                    personEle.className = 'day__person';
                    birthDayContainerEle.classList.remove("day--empty");
                    Object.assign(personEle.style, {
                        width: widthAndHeight,
                        height: widthAndHeight
                    });
                    birthdayInfoEle.innerText = (birthdayCount === 1) ? "1 birthday":
                                                birthdayCount+" birthdays";
                    personEle.innerText = segregatedCal[key][i]["initials"];
                    peopleEle.innerHtml = '';
                    peopleEle.appendChild(personEle);
                }

            }
        }
        console.log(segregatedCal);
    }
/*
* modifyCalData: function recieves birthdayData, selectedYear as parameters and performs
* sorting based on persons DoB, calculates current years birth day and pushes data into respective arrays
* of the segregatedCal object and calls renderCal() method.
*/
    function modifyCalData(birthdayData, selectedYear) {
        for (var key in segregatedCal) {
            segregatedCal[key] = [];
        }
        birthdayData.sort(function(p1, p2) {
            return new Date(p2.birthday) - new Date(p1.birthday);
        }).map(function(person, i) {
            person.currentBirthday = new Date(new Date(person.birthday).setFullYear(selectedYear));
            person.day = weekday[new Date(person.currentBirthday).getDay()];
            person.initials = person["name"].substr(0, 1) +
                person["name"].substr(person["name"].indexOf(" ") + 1, 1);
            for (var key in segregatedCal) {
                if (key == person.day)
                    segregatedCal[key].push(person);
            }
            return person;
        });
        renderCal();
    }
/*
* return statement consists of the methods which are exposed to outside world of the application
* onUpdateClick: function will be called when user clicks on update button in the webpage and grabs
* birthdayData from textarea, selectedYear  from input and calls modifyCalData() method with this params.
*/
    return {
        onUpdateClick: function() {
            birthdayData = eval(document.getElementById("json-input").value);
            selectedYear = document.getElementById('js-year').value;
            modifyCalData(birthdayData, selectedYear);
        }
    };
})();