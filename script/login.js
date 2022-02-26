function signup(){
    window.location.href="signUp.html";
}


document.getElementById("submitrth").addEventListener("click", signin);

var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));

function signin(){
  var email = document.getElementById("email1rth").value;
  var pass = document.getElementById("pass1rth").value;

  for(var a = 0; a<regdUsers.length; a++){
      if(regdUsers[a].emailAdd == email && regdUsers[a].passwd == pass){
          window.location.href = "home.html";
          alert("You Can Shop Now With Best Offers!");
         break;
      }
     
  }

} 