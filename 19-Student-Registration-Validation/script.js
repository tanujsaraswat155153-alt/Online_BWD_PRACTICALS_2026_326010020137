const form=document.getElementById("registrationForm");
function error(id,text){document.getElementById(id).textContent=text;}
function clearErrors(){["nameError","emailError","passwordError","genderError","courseError","phoneError","addressError"].forEach(id=>error(id,""));const m=document.getElementById("message");m.textContent="";m.className="";}
function validate(){
 clearErrors();let ok=true;
 const name=document.getElementById("name").value.trim();
 const email=document.getElementById("email").value.trim();
 const password=document.getElementById("password").value;
 const gender=document.getElementById("gender").value;
 const course=document.getElementById("course").value;
 const phone=document.getElementById("phone").value.trim();
 const address=document.getElementById("address").value.trim();
 if(name.length<2||!/^[A-Za-z .'-]+$/.test(name)){error("nameError","Enter a valid name.");ok=false;}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){error("emailError","Enter a valid email address.");ok=false;}
 if(password.length<8){error("passwordError","Password must be at least 8 characters.");ok=false;}
 if(!gender){error("genderError","Please select gender.");ok=false;}
 if(!course){error("courseError","Please select a course.");ok=false;}
 if(!/^[0-9]{10}$/.test(phone)){error("phoneError","Enter a 10-digit mobile number.");ok=false;}
 if(address.length<5){error("addressError","Enter your address or other details.");ok=false;}
 return ok;
}
form.addEventListener("submit",function(event){
 event.preventDefault();const m=document.getElementById("message");
 if(validate()){m.textContent="Registration form validated successfully!";m.className="success";alert("Registration successful (sample demonstration).");}
 else{m.textContent="Please correct the errors shown above.";m.className="failure";}
});
form.addEventListener("reset",()=>setTimeout(clearErrors,0));