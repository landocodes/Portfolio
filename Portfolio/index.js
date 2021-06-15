 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-top").style.display = "block";
  } else {
    document.getElementById("btn-top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function validate(){
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let errormsg = document.getElementById("errormsg");
  
  errormsg.style.padding = "10px";
  errormsg.style.color = 'red'
  
  let text;
  if(name == '' || name == null){
    text = "Name is required";
    errormsg.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6 || email == '' || email == null){
    text = "Please Enter valid Email";
    errormsg.innerHTML = text;
    return false;
  }
  if(subject == ""|| subject==null){
    text = "Please Enter Correct Subject";
    errormsg.innerHTML = text;
    return false;
  }
  if(message == "" || message == null){
    text = "Message is required";
    errormsg.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Please Enter More Than 10 Characters";
    errormsg.innerHTML = text;
    return false;
  }
}

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);
    
function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}

function refreshPage(){
  window.location.reload();
} 