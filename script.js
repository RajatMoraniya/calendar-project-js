let date = new Date();

function renderDate() {
  date.setDate(date.getDate());
  let day = date.getDay() + 2; //day starts from Monday as 0 and Sunday as 6
  let currMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  let prevMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  let today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //set month and year on calendar's screen
  document.getElementById("year").innerHTML = date.getFullYear();
  document.getElementById("month").innerHTML = months[date.getMonth()];

  var cells = "";
  //getting past month data for filling first row of current month
  for (let x = day; x > 0; x--) {
    cells += "<div class='pre-data'>" + " " + "</div> ";
  }

  //getting all dates and set today date and all other dates 
  for (let i = 1; i <= currMonthLastDate; i++) {
    if (
      i == date.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    ) {
      cells += "<div class='today cells'>" + i + "</div> ";
    } else {
      cells += "<div class='cells'>" + i + "</div> ";
    }
  }

  //sending cells data to html
  document.getElementsByClassName("dates")[0].innerHTML = cells;
}

function moveMonth(args) {
  if (args == "prev") {
    date.setMonth(date.getMonth() - 1);
    renderDate();
  } else if (args == "next") {
    date.setMonth(date.getMonth() + 1);
    renderDate();
  }
}

function moveYear(args) {
  if (args == "prev") {
    date.setFullYear(date.getFullYear() - 1);
    renderDate();
  } else if (args == "next") {
    date.setFullYear(date.getFullYear() - 1);
    renderDate();
  }
}

function jumptoday() {
  date = new Date();
  date.setMonth(date.getMonth());
  renderDate();
}
