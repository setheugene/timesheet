
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"

var name = ""
var role = ""
var startDate = ""
var monthlyRate = ""

// initialize firebase
var config = {
  apiKey: "AIzaSyBF4897EgETOLj_a0jLA09hsvpkOEU2Poo",
  authDomain: "fire-test-f8c72.firebaseapp.com",
  databaseURL: "https://fire-test-f8c72.firebaseio.com",
  projectId: "fire-test-f8c72",
  storageBucket: "fire-test-f8c72.appspot.com",
  messagingSenderId: "988321318227"
 };
 firebase.initializeApp(config);
 var database = firebase.database();


// grabs employee information
$("#addEmployee").on("click", function(event) {
    // initial values
name = $("#nameInput").val().trim();
role = $("#roleInput").val().trim();
startDate = $("#dateInput").val().trim();
monthlyRate = $("#rateInput").val().trim();

  event.preventDefault();
  var newEmployee = {
    name : name,
    role : role,
    startDate : startDate,
    monthlyRate : monthlyRate,
  };
  database.ref().push(newEmployee);
  console.log(newEmployee.name);
  console.log(newEmployee.role);
});


database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val().name);
    var newName = snapshot.val().name;
    var newRole = snapshot.val().role;
    var newDate = snapshot.val().startDate;
    var newRate = snapshot.val().monthlyRate;
    var addRow = $("<tr>").append(
        $("<td>").text(newName),
        $("<td>").text(newRole),
        $("<td>").text(newDate),
        $("<td>").text(newRate),
    );
    console.log(addRow);
    $(".table tbody").append(addRow);
});
