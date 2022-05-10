var user = document.getElementById("sname");
var pass = document.getElementById("pass");
var button = document.getElementById("submit");
//modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')




//guest guest123
button.addEventListener("click", function(){
    if(getId() && getPass()){
        window.location.href = "profile.html";
    } else {
        $("#exampleModal").modal('toggle');
    }
});

function getId(){
   return user.value == "guest";
}

function getPass(){
    return pass.value == "guest123";
 }
 


