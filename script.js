function login(){
   let user=document.getElementById("username").value
   let pass=document.getElementById("password").value
   let sub=document.getElementById("submit")

if(user=="admin" && pass==123){
    alert("Sucesso!");
    location.href="index2.html"

}else{
    alert("usuário ou senha incorreta")
}  
}