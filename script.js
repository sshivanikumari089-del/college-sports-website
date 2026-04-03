// ===== HOME BUTTON =====
function goHome(){
    window.location = "home.html";
}


// ===== BACK TO GALLERY (🔥 NEW ADD) =====
function goGallery(){
    window.location = "gallery.html";
}


// ===== REGISTER =====
function register(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("regPass").value;
    var confirm = document.getElementById("confirmPass").value;

    if(name === "" || email === "" || password === "" || confirm === ""){
        alert("Fill all fields");
        return false;
    }

    if(password !== confirm){
        alert("Passwords do not match");
        return false;
    }

    var username = email.split("@")[0];

    var user = {
        name: name,
        email: email,
        username: username,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!\nYour Username is: " + username);

    window.location = "gallery.html";
}


// ===== LOGIN =====
function login(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser && username === storedUser.username && password === storedUser.password){
        alert("Login Successful!");
        window.location = "gallery.html";
        return false;
    } else {
        alert("Invalid Username or Password");
        return false;
    }
}


// ===== NAVIGATION =====
function openCricket(){ window.location = "cricket.html"; }
function openFootball(){ window.location = "football.html"; }
function openVolleyball(){ window.location = "volleyball.html"; }
function openRunning(){ window.location = "running.html"; }
function openBadminton(){ window.location = "badminton.html"; }
function openHockey(){ window.location = "hockey.html"; }


// ===== ADD STUDENT =====
function addstudent(){

    var name = document.getElementById("name").value;
    var studentClass = document.getElementById("class").value;
    var roll = document.getElementById("roll").value;

    if(name === "" || studentClass === "" || roll === ""){
        alert("Fill all fields");
        return false;
    }

    var students = JSON.parse(localStorage.getItem("students")) || [];

    var student = {
        name: name,
        class: studentClass,
        roll: roll
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("class").value = "";
    document.getElementById("roll").value = "";

    return false;
}


// ===== SHOW STUDENTS =====
function displayStudents(){

    var list = document.getElementById("studentList");
    if(!list) return;

    list.innerHTML = "";

    var students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach(function(s){
        var li = document.createElement("li");
        li.innerHTML = s.name + " | " + s.class + " | " + s.roll;
        list.appendChild(li);
    });
}


// ===== LOAD DATA =====
window.onload = function(){
    displayStudents();
};


// ===== LOGOUT =====
function logout(){
    alert("Logged out successfully!");
    window.location = "home.html";
}


// ===== CONTACT FORM =====
function sendMessage(){

    var name = document.getElementById("cname").value;
    var email = document.getElementById("cemail").value;
    var msg = document.getElementById("cmsg").value;

    if(name === "" || email === "" || msg === ""){
        alert("Please fill all fields");
        return false;
    }

    alert("Message Sent Successfully!");

    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("cmsg").value = "";

    window.location = "gallery.html";

    return false;
}


// ===== FORM → EVENT REDIRECT =====
function goToEvent(){

    var name = document.getElementById("name").value;
    var studentClass = document.getElementById("class").value;
    var roll = document.getElementById("roll").value;

    if(name === "" || studentClass === "" || roll === ""){
        alert("Please fill all fields");
        return false;
    }

    alert("Registration Successful!");

    window.location = "event.html";

    return false;
}