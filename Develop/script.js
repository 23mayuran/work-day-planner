


moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

let currentTime = moment();

currentTime = currentTime.startOf("hour");


time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);