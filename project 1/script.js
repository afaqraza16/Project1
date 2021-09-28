// Retriving Html elements form the DOM
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// function to update class and massage for 
function showerror(input,massage){
//get the parrent element of the input field (.form-control)
const formcontrol = input.parentelement;
//replace the class -add error 
formcontrol.classname = 'form-control error';
// get the small element for the error  massage 
const small = formcontrol.queryselector('small')
// replace the text for small element using the input massage
small.innertext = massage;

}
// function to update class for success
function showsuccess(input){

   //get the parent element of the input feild (.form-control)
   const formcontrol = input.parentelement;
   // replace rhe class - add success
   formcontrol.classname = 'form-control success';


}
//event listners
// create event listner  for submit button
form.addEventListener('submit', function(e) {
 // stop page form reloading on submit 
    e.preventDefault();


    //check to see  if feilds meet required feild requirement 
    // check   if username input is empty 
    if(username.value === '') {
        showerror(username, 'Username is required');
    }else{
        showsuccess(password);
    }
       //check if password2 input  is empty 
       if(password2.value === '') {
           showerror(password2, 'confirm password is required');

       }else{
           showsuccess(password2);
       }
    });



