var list = document.querySelector('ul');
list.addEventListener('click', function (x) {
    if (x.target.tagName === 'li') {
        x.target.classList.toggle('checked');
    }
}, false);

var toDoList = document.querySelector('#toDo');
list.addEventListener('click', function (y) {
    var text = y.target;
    document.getElementById('inProgress').appendChild(text);
}, false);

var compList = document.querySelector('#inProgress');
compList.addEventListener('click', function (z) {
    var text = z.target;
    document.getElementById('completed').appendChild(text);
}, false);

var reverseListComp = document.querySelector('#completed');
reverseListComp.addEventListener('contextmenu', function (ev) {
    ev.preventDefault();
    var text = ev.target;
    document.getElementById('inProgress').appendChild(text);
}, false);

var reverseListInProg = document.querySelector('#inProgress');
reverseListInProg.addEventListener('contextmenu', function (ev) {
    ev.preventDefault();
    var text = ev.target;
    document.getElementById('toDo').appendChild(text);
}, false);

var reverseListToDo = document.querySelector('#toDo');
reverseListToDo.addEventListener('contextmenu', function (ev) {
    ev.preventDefault();
    var text = ev.target;
    document.getElementById('toDo').removeChild(text);
}, false);

function addNewNote() {
    var x;
    rdbHigh = document.getElementById("highRb");
    rdbMid = document.getElementById("midRb");
    rdbLow = document.getElementById("lowRb");
    var li = document.createElement("li");
    if (rdbHigh.checked) {
        x = rdbHigh.value;
    }
    else if (rdbMid.checked) { x = rdbMid.value }
    else if (rdbLow.checked) { x = rdbLow.value }
    else { alert("Do not empty!"); return; }


    var input = document.getElementById("txtInput").value;
    var a = document.createTextNode(input + "--" + x);
    li.appendChild(a);
    if (input === '') { alert("Do not empty!"); }

    else {
        document.getElementById("toDo").appendChild(li);

    }
    document.getElementById("txtInput").value = "";
}