function displayClock() {
    var date = new Date();
    var day = date.toDateString();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    if (hour == 12) {
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;



    var time = hour + ":" + min + ":" + sec + " " + session;
    document.getElementById("basicDigitalClock").innerText = time;

    document.getElementById("basicDigitalDate").innerText = day;

    setTimeout(displayClock, 1000);

}

displayClock();

function addNewNote() {
    var x = "";
    rdbHigh = document.getElementById("highRb");
    rdbMid = document.getElementById("midRb");
    rdbLow = document.getElementById("lowRb");
    if (rdbHigh.checked) {
        x = rdbHigh.value
    }
    else if (rdbMid.checked) { x = rdbMid.value }
    else if (rdbLow.checked) { x = rdbLow.value }
    else { alert("Do not empty!"); return; }

    var li = document.createElement("li");
    var input = document.getElementById("txtInput").value;
    var a = document.createTextNode(input + "--" + x);
    li.appendChild(a);
    if (input === '') { alert("Do not empty!"); }
    else { document.getElementById("toDo").appendChild(li); }
    document.getElementById("txtInput").value = "";
}