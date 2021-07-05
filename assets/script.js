var timeDisplayEl = $("#currentDay");


function displayTime() {
    var rightNow = moment().format('MMMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }
  displayTime();

