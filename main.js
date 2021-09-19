const ma165Course = document.getElementById('ma165');
const phys172Course = document.getElementById('phys172');
const cs159Course = document.getElementById('cs159');
const engl106Course = document.getElementById('engl106');
const engr131Course = document.getElementById('engr131');
const ils103Course = document.getElementById('ils103');
const deselectBtn = document.getElementById('deselect');
const courseContainer = document.querySelector('.course__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners
courseContainer.addEventListener('click', selectCourse);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetCourses);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteCourses);

// courses click  (3)
function selectCourse (e){
    resetCourses();

    courseColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'ma165':
            activeCourse(ma165Course, courseColor);
            break
        case 'phys172':
            activeCourse(phys172Course, courseColor);
            break
        case 'cs159':
            activeCourse(cs159Course, courseColor);
            break
        case 'engl106':
            activeCourse(engl106Course, courseColor);
            break
        case 'engr131':
            activeCourse(engr131Course, courseColor);
            break
        case 'ils103':
            activeCourse(ils103Course, courseColor);
            break
    }

};

// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('course') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Active course (1)
function activeCourse(course, color){
    course.classList.toggle('selected');

    if(course.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset courses (2)
function resetCourses(){
    const allCourses = document.querySelectorAll('.course__name');

    allCourses.forEach((item)=>{
        item.className = 'course__name';
    })
}

// Delete courses
function deleteCourses(){
    const courses = document.querySelectorAll('.course');

    courses.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}