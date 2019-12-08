function validationcheck()
{
var uid = document.SignUp.userid;
var passw = document.SignUp.passw;
var uname = document.SignUp.username;
var uadd = document.SignUp.add;
var ucntry = document.SignUp.cntry;
var uzip = document.SignUp.zip;
var umail = document.SignUp.mail;
var umsex = document.SignUp.msex;
var ufsex = document.SignUp.fsex; 
if(userid_validation(uid,5,12))
{
if(passw_validation(passw,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(cntryselect(ucntry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(umail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;

} 
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passw_validation(passw,mx,my)
{
var passw_len = passw.value.length;
if (passw_len == 0 ||passw_len >= my || passw_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passw.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function cntryselect(ucntry)
{
if(ucntry.value == "Default")
{
alert('Select your country from the list');
ucntry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(umail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(umail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
umail.focus();
return false;
}
} function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
