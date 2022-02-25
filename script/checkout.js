  let userName = JSON.parse(localStorage.getItem("userDataBase"));

    let div_username=document.querySelector(".checkout_username>p")
    div_username.innerHTML='<i class="fa-regular fa-circle-check fa-2x"></i>'+`SIGNED IN AS ${userName[0].name}`;
 

    let firstName=document.getElementById("checkout_firstName");
    firstName.value=userName[0].name;

    let lastName = document.getElementById("checkout_lastName")
    lastName.value=userName[0].lastName;

    let email=document.getElementById("checkout_email")
    email.value=userName[0].emailAdd;

    let phone =document.getElementById("checkout_phone")
    phone.value=userName[0].mblNum;



   function checking_out(){
    let firstName=document.getElementById("checkout_firstName").value;
    let lastname = document.getElementById("checkout_lastName").value;
    let email=document.getElementById("checkout_email").value;
    let phone =document.getElementById("checkout_phone").value;

        let zipcode=document.getElementById("zipcode").value;
        let state=document.getElementById("stateDel").value;
        let city=document.getElementById("cityDel").value;
        let addressDe=document.getElementById("addressDel").value;
        let phone1 = document.getElementById("phoneDel").value;
        let country=document.getElementById("checkout_country").option;
        let address=document.getElementById("added_address")

        let checkoutObj={
            name:firstName,
            lastname:lastName,
            mail:email,
            mobile:phone,
            addr:addressDe,
            ste:state,
            place:city,
            conty:country,
        }

          if(country,zipcode,state,city,addressDe,phone1){


            let nameP=document.createElement("p");
            nameP.textContent=firstName+" "+lastname;
            let mailId=document.createElement("p");
            mailId.textContent=email;
            let mobNum=document.createElement("p");
            mobNum.textContent=phone;
            let addre=document.createElement("p");
            addre.textContent=city+" "+state+" "+zipcode;
            // let couty=document.createElement("p");
            // couty.textContent=country.value;
            
            let address_div = document.getElementById("added_address");
            address_div.append(nameP,mailId,mobNum,addre)

            document.getElementById('order_review').checked = true;
            localStorage.setItem("checkout_details",JSON.stringify(checkoutObj))
            document.getElementById('checkout_details').checked = false;
           
          }
          else{
              alert("enter all the required details");
          }   
    }