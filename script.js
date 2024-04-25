document.getElementById('calcbtn').addEventListener('click',calcloan)
function calcloan()
{ 
    
    const lamnt=document.getElementById('lamntinput').value
  
    const intrestrate =document.getElementById('intrestinput').value
  
    const lanterm=document.getElementById('loanterminput').value
if( isNaN(lamnt) && isNaN(intrestrate) &&  isNaN(lanterm<0))
{
    alert("please enter valid numbers in all fields")
}
else{
const monintrest=intrestrate/100/12;
const totalamnt=lanterm;
const monamnt=(lamnt*monintrest)/(1-Math.pow(1+monintrest,-totalamnt));
const totalintrest=(monamnt*totalamnt)-lamnt;
displayresult(monamnt,totalintrest);
}
}
function displayresult(a,b)
{
    console.log("hii")
    const res=document.getElementById('result')
    res.textContent=""
    const div = document.createElement('div')
    const mamnt=document.createElement('p')
    mamnt.textContent="monthly amount: "+a.toFixed(2)
    const tintrest=document.createElement('p')
    tintrest.textContent="total intrest : "+b.toFixed(2)
div.append(mamnt,tintrest)
res.appendChild(div)
}
