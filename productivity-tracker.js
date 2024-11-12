const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function createCalendar() {
    const daysInMonth = getDaysInMonth();

    for (let days = 1; days <= daysInMonth; days++) {
        const parentElement = document.getElementById("calendar");
        const dayBox = document.createElement("div");
        dayBox.classList.add("day-box");
        dayBox.textContent = days;
        parentElement.appendChild(dayBox);

        const isCompleted = localStorage.getItem(`day-${currentYear}-${currentMonth}-${days}`) === 'true';
        if (isCompleted) {
            dayBox.classList.add("completed");
        }

        dayBox.addEventListener("click", () => {
            const completed = dayBox.classList.toggle("completed");
            localStorage.setItem(`day-${currentYear}-${currentMonth}-${days}`, completed);
        });
    };
   ;
}
function getDaysInMonth() {
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    return daysInMonth;
}

createCalendar();