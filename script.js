let date = new Date();

function renderDate() {
  date.setDate(date.getDate());
  let day = date.getDay();
  let endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  let prevdate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
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

  document.getElementById("full_date").innerHTML = date.getFullYear();
  document.getElementById("month").innerHTML = months[date.getMonth()];

  var cells = "";
  for (x = day; x > 0; x--) {
    cells += "<div class='pre-data'>" + (prevdate - x + 1) + "</div> ";
  }

  for (i = 1; i <= endDate; i++) {
    if (i == date.getDate() && date.getMonth() == date.getMonth()) {
      cells += "<div class='today'>" + i + "</div> ";
    } else {
      cells += "<div>" + i + "</div> ";
    }
  }

  document.getElementsByClassName("dates")[0].innerHTML = cells;
}

function moveDate(args) {
  if (args == "prev") {
    date.setMonth(date.getMonth() - 1);
    renderDate();
  } else if (args == "next") {
    date.setMonth(date.getMonth() + 1);
    renderDate();
  }
}

function jumptoday() {
  renderDate();
}
