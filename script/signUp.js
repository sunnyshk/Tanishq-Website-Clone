document.querySelector("form").addEventListener("submit", formSubmit);
    var userStack = JSON.parse(localStorage.getItem("userDataBase"))||[];

        function formSubmit(event){
            event.preventDefault();
            var name = document.getElementById("namerth").value;
            var surName = document.getElementById("lastrth").value;
            var mobile = document.getElementById("numbrth").value;
            var email = document.getElementById("mailrth").value;
            var pass = document.getElementById("passwordrth").value;

            var userData = { 
                name : name,
                lastName:surName,
                emailAdd : email,
                mblNum: mobile,
                passwd: pass,
            };

            userStack.push(userData);
            localStorage.setItem("userDataBase", JSON.stringify(userStack));
            alert("Signup Success");
            window.location.href = "login.html";
        }