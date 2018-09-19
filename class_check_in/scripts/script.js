/*eslint-env browser*/
//document.getElementById("checkIn").onclick = displayDate;


/*var time = new Date();
var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
var name = document.getElementById("nameTyped").value;
var badge = document.getElementById("badgeTyped").value;
var badgeNum = document.getElementById("badgeNumTyped").value;
var returnButton = "</td><td><input type='button' class='return' value='Click to Return Badge'></td>";
*/

//This array is where all the data is stored. checkedInArray[0] contains the table heading row, though it is outputted as table rows
var checkedInArray = [
    ['<strong>Name</strong>', '<strong>Time Arrived</strong>', '<strong>Time Left Class</strong>']];


//This function is meant to clear the table after the form is submitted. It always deletes at least one row, but doesn't always delete all rows from the table. 
function clearTable() {
    "use strict";
    var i;
    for (i = 0; i < 50; i++) {
        document.getElementById("checkedIn").deleteRow(-1);
    }
//    for (var i = 0; i < document.getElementById("checkedIn").rows.length + 50; i++) {
}


//}

//This function writes the entire array into an HTML table. It is reliable.
function displayArray() {
    "use strict";
    var i = 0;
    for (clearTable(); i < checkedInArray.length; i++) {
        document.getElementById("checkedIn").innerHTML += "<tr><td>" + checkedInArray[i][0] + "</td><td>" + checkedInArray[i][1] + "</td><td>" + checkedInArray[i][2] + "</td></tr>";
    }
}

//This function validates that something was typed into all three input boxes and writes all the data typed in by the user to checkedInArray
document.getElementById("checkIn").addEventListener("click",
    function () {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        if (document.getElementById("nameTyped").value === "") {
            window.alert("You need to fill out the form");
        } else {
            checkedInArray.push([document.getElementById("nameTyped").value, timeNow, "<input type='button' class='return' value='Click to Leave'>"]);
            clearTable();
            displayArray();

//This part of the code simply wrote the user typed data into a table, but did not write it to an array. It is now deprecated.
/*            document.getElementById("checkedIn").innerHTML += "<tr><td>" + name + "</td> <td>" + badge + "</td> <td>" + badgeNum + "</td><td>" + timeNow + '</td><td><input type="button" class="return" value="Click to Return Badge"></td>';
*/

//This clears the forms after the information is written to checkedInArray
            document.getElementById("nameTyped").value = "";
        }
        
    }
                                                   );


//This is meant to change the "click to return badge" button into a time that badge was returned. It doesn't work, and I think it's because the DOM element it refers to is not created until after the script loads.
/* document.getElementById("return1").addEventListener("click",
    function () {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        document.getElementById("return1").value = timeNow;
    }
                                                          
                                                          
                                                          );
*/

/*
function deleteRow(r) {
    "use strict";
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

       function deleteRow() {
//            alert("in deleteRow");
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;
            for (var i = 0; i < rowCount; i++) {
//            alert(rowCount);
                var row = table.rows[i];
//            alert(document.getElementById("dataTable").rows[0].innerHTML);
                var chkbox = row.cells[1].childNodes[1];
                if (chkbox !== null && chkbox.checked === true) {
//            alert(chkbox);
                    if (rowCount <= 1) { // limit the user from removing all the fields
                        alert("Cannot Remove all the Passenger.");
                        break;
                    }
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }
            }
*/