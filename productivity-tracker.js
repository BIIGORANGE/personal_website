function createCalendar() {
    const daysInMonth = getDaysInMonth();

    for (let days = 1; days <= daysInMonth; days++) {
        const parentElement = document.getElementById("calendar");
        const dayBox = document.createElement("div");
        dayBox.classList.add("day-box");
        dayBox.textContent = days;
        parentElement.appendChild(dayBox);
    }
}
function getDaysInMonth() {
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const currentDay = date.getDay();

    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    return daysInMonth;
}

createCalendar();