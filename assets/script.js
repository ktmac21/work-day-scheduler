var timeDisplayEl = $("#currentDay");
var textAreaEl = $(".text-area"); 
var pEl = $(".appendText"); 
var submitBtn = $(".saveBtn");
// console.log(submitBtn);



$('textarea[id="9"]').val(localStorage.getItem("9"));
$('textarea[id="10"]').val(localStorage.getItem("10"));
$('textarea[id="11"]').val(localStorage.getItem("11"));
$('textarea[id="12"]').val(localStorage.getItem("12"));
$('textarea[id="1"]').val(localStorage.getItem("1"));
$('textarea[id="2"]').val(localStorage.getItem("2"));
$('textarea[id="3"]').val(localStorage.getItem("3"));
$('textarea[id="4"]').val(localStorage.getItem("4"));
$('textarea[id="5"]').val(localStorage.getItem("5"));

function displayTime() {
    var rightNow = moment().format('MMMM DD, YYYY');
    timeDisplayEl.text(rightNow);
}
displayTime();

function textSubmit(event) {
    event.preventDefault();
    console.log("in function")

    // console.log($(this).attr("id")); 

    var id = $(this).attr("id");
    
    var eventItem = $('textarea[id='+ id + ']').val();
    // console.log(eventItem);
    
    
    var scheduledItem = eventItem; 
    
    

    if (!eventItem) {
        console.log('No item filled out in the textarea!');
        return;
    }

    

   

    localStorage.setItem(id, scheduledItem);

  
}

submitBtn.on('click', textSubmit); 

    var time = moment().format("hh:mm"); 
    console.log(time);
    var timeBlockEl = $("#moment1");
    console.log(timeBlockEl);
    
    // function colorTimes {
    //     i
    // }