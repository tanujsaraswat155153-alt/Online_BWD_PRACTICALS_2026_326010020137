// Front-end contact form demonstration. No information is sent to a server.
const contactForm=document.getElementById("contactForm");
if(contactForm){
 contactForm.addEventListener("submit",function(event){
  event.preventDefault();
  const name=document.getElementById("visitorName").value.trim();
  const email=document.getElementById("visitorEmail").value.trim();
  const message=document.getElementById("visitorMessage").value.trim();
  const feedback=document.getElementById("feedback");
  if(!name||!email||!message){feedback.textContent="Please complete all fields.";feedback.className="mt-3 text-danger";return;}
  feedback.textContent="Thank you, "+name+". Your sample message has been checked.";
  feedback.className="mt-3 text-success";contactForm.reset();
 });
}