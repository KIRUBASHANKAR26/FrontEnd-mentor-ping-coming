var form = document.getElementById('form');
form.onclick = function(e) {
    e.preventDefault();
}
function check()
{
  var emailInput=document.getElementById("email").value;
  var errorText=document.getElementById("text-error");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if(emailInput.match(pattern))
  { 
    errorText.classList.remove("show");
    document.getElementById("email").value = "";
    document.getElementById("email").style.border = "1px solid hsl(223, 100%, 88%)"; 
    
  }else
  {  
    errorText.classList.add("show");
    document.getElementById("email").style.border = "1px solid hsl(0, 93%, 68%)";
  }
}



