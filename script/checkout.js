  let userName = JSON.parse(localStorage.getItem("logInUserdata"));

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
            nameP.textContent=firstName+" ";
            let mailId=document.createElement("p");
            mailId.textContent=email;
            let mobNum=document.createElement("p");
            mobNum.textContent=phone;
            let addre=document.createElement("p");
            addre.textContent=city+" "+state+" "+zipcode;
            // let couty=document.createElement("p");
            // couty.textContent=country.value;

            let cart_items = document.getElementById("added_items");


            let data = JSON.parse(localStorage.getItem("CartItems"))

            data.map((ele)=>{
                let div = document.createElement("div");
                let image = document.createElement("img");
                image.src=ele.image_link;
                let amount= document.createElement("h5")
                amount=`Rs.`+ele.price;
                // getTotal(ele.price);
                let pro_name= document.createElement("h3");
                pro_name.textContent=ele.name;
                let type = document.createElement("p");
                type.textContent=ele.type;
                div.append(image,pro_name,type,amount)
                cart_items.append(div);
            });
         let total =0;
         for(var i=0; i<data.length; i++){
             total+=data[i].price;
             if(total==0){
                 total="No items add";
             }
         }
        
        let amount = document.createElement("h4");
        amount.textContent="Rs."+total;
        let addHead = document.createElement("h2");
        addHead.textContent="DELIVERY ADDRESS:";

            
            let address_div = document.getElementById("added_address");
            address_div.append(amount,addHead,nameP,mailId,mobNum,addre)

            document.getElementById('order_review').checked = true;
            localStorage.setItem("checkout_details",JSON.stringify(checkoutObj))
            document.getElementById('checkout_details').checked = false;
           
          }
          else{
              alert("enter all the required details");
          }   
    }


  function continue_payment(){
    document.getElementById('checkbox_payment').checked = true;



     document.getElementById('order_review').checked = false;
        
   }

   function pay_order(){
     window.location.href="payment.html";
   }


function creditCard(){
  document.getElementById('credit_details').checked = true;
  document.getElementById('netbanking').checked = false;
  document.getElementById('wallet').checked = false;
}

function netbanking(){
  document.getElementById('credit_details').checked = false;
  document.getElementById('netbanking').checked = true;
  document.getElementById('wallet').checked = false;
}

function wallet(){
  document.getElementById('credit_details').checked = false;
  document.getElementById('netbanking').checked = false;
  document.getElementById('wallet').checked = true;
}


function redirect(){
  window.location.href="checkout.html";
}
function otpPage(){
  let card = document.getElementById("card_number").value;
  let expiry = document.getElementById("exp_date").value;
  let cvv = document.getElementById("cvv").value;
  let holder = document.getElementById("holder_name").value;
 

  if(card,expiry,cvv,holder){
     window.location.href="payment_otp.html"
  }
  else{
    alert('enter card details')
  }
}

function thankyou(){
  let otpvalue = document.getElementById("otpvalue").value;
  if(otpvalue==1234){
    window.location.href="thankyou.html";
    
  }
  else{
       alert("worng password-enter '1234'");
  }
}

function tohome(){
  window.location.href="Home.html"
}







