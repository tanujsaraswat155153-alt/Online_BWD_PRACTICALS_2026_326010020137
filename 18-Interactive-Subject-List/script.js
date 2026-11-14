// Array of subject objects
const subjects = [
 {name:"Computer Fundamentals",code:"BCA101",credits:4,description:"Introduction to computers, components, types and applications."},
 {name:"Programming in C",code:"BCA102",credits:4,description:"C language basics, operators, conditions, loops and functions."},
 {name:"Mathematics",code:"BCA103",credits:3,description:"Mathematical concepts used in computing and problem solving."},
 {name:"Communication Skills",code:"BCA104",credits:2,description:"Written, spoken and professional communication skills."},
 {name:"Web Designing",code:"BCA105",credits:4,description:"Introduction to HTML, CSS and webpage design."}
];
const select = document.getElementById("subjectSelect");
const details = document.getElementById("details");

// Function to populate the subject list
function displaySubjectList(){
 subjects.forEach((subject,index)=>{
  const option=document.createElement("option");
  option.value=index; option.textContent=subject.name; select.appendChild(option);
 });
}

// Function to display selected subject details
function showSubject(index){
 if(index===""){details.innerHTML="<h2>Subject Information</h2><p>Please select a subject.</p>";return;}
 const s=subjects[Number(index)];
 details.innerHTML=`<h2>${s.name}</h2><p class="code">Subject Code: ${s.code}</p><p><strong>Credits:</strong> ${s.credits}</p><p><strong>Description:</strong> ${s.description}</p>`;
}

// Event listener responds to user selection
select.addEventListener("change",function(){showSubject(this.value);});
displaySubjectList();