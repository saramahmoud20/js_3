function validate(){
var user = document.getElementById("user").value;
var email = document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var confirm = document.getElementById("confirm").value;
var result = document.getElementById("result");
result.setAttribute("class", "alert alert-danger text-center");
if (user=="" && email=="" && pass=="" && confirm==""){
    result.innerHTML = "Enter Data in Form";
    return false;
}else if (user.length<5 || user.length>15){
    result.innerHTML = "Enter 5-15 Character in Name";
    return false;
}else if (email.indexOf("@",3) ==-1){
    result.innerHTML = "Enter Valid Email";
    return false;
}else if (pass.length<8){
    result.innerHTML = "Week Password";
    return false;
}else if (pass != confirm){
    result.innerHTML = "Match Password";
    return false;
}else{
    return true; 
}

}