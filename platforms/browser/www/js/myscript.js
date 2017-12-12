
/*Funtion to validate the registration page 
  retrieves the register required details 
  and prompts user if any os them is
*/
function validateregistration(){	
	var username = document.getElementById("unm");
	var email = document.getElementById("eml");
	var age = document.getElementById("age");
	var phonenumber = document.getElementById("pnm");
	var usererror = document.getElementById("uerror");
	var phoneerror = document.getElementById("perror");
	var emailerror = document.getElementById("emerror");
	var agerror = document.getElementById("gerror");
	var merror = document.getElementById("merror");

	//validating username
	if(username.value==""){
		usererror.innerHTML = "Username required";
	}else{
		if(!preg_match('/^[a-zA-Z ]+$/', username)){
			usererror.innerHTML = "Only alphabetical letters allowed";
		}		
	}

	//validating email
	if(email.value==""){
		emailerror.innerHTML = "Email address required";
	}else{
	  if(!preg_match('/^\w+([\.-]?\w+)*@\w+([\.-]??\w+)*(\.\w{2,3})+$/', email)){
			emailerror.innerHTML = "Wrong email format";
	  }		
	}

	//validating age
	 if(age.value==""){
		agerror.innerHTML = "Age required";	
	}
	
	//validating phonenumber
	 if(phonenumber.value==""){
		phoneerror.innerHTML = "Phonenumber required";
	}
		
}

/*function to register as a user in the system
    gets all the data from the register page and sends to the 
    register.php which stores the data in the server.
    It redirects the user to the login page 
*/
function registerAsUser(){

	//get the values
	var usern= document.getElementById('unme').value;
	var pass= document.getElementById('passwd').value;
	var age= document.getElementById('age').value;
	var pnumber= document.getElementById('pnm').value;
	var mail= document.getElementById('eml').value;

	//open httpRequest
	if (window.XMLHttpRequest) {
				xhttp = new XMLHttpRequest();
				} else {			
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {					
					if (this.responseText == "successful") {
                            console.log(this.responseText);
                            window.location.href = "login/index.html";
                        }else{
                        	console.log("error occured");

                        }						
				}
		  };

		  //send data to the server
		  xhttp.open("GET", "https://watchmeorg.000webhostapp.com/register.php?username="+usern+"&password="+pass+"&age="+age+"&phonenumber="+pnumber+"&email="+mail, true);		  
		  xhttp.send();
		}


/*function to login as a user
    function to login in the system
    gets all the data from the login page and sends to the 
    login.php which accesses the server and checks if the login credentials are valid.
    If valid, the user is redirected to the upload page.

*/
function loginAsUser(){
	var usern= document.getElementById('unme').value;
	var pass= document.getElementById('passwd').value;
	console.log(usern);
	console.log(pass);

	if (window.XMLHttpRequest) {
				xhttp = new XMLHttpRequest();
				} else {
			
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhttp.onreadystatechange = function() {
                 console.log("in the on readyState");
				if (this.readyState == 4 && this.status == 200) {					
					if (this.responseText == "successful") {
					        console.log(this.responseText);
                            window.location.href = "../layout/upload.html";
                            } else {
                            	console.log(this.responseText); 
                            	console.log("error");
                           	
                            }
                          }
                      }
        
		  xhttp.open("GET", "https://watchmeorg.000webhostapp.com/login.php?username="+usern+"&password="+pass, true);		  
		  xhttp.send();
		}

/*function to validate the login page
   prompts user to enter details if not completed
*/
function validatelogin(){
	var uname = document.getElementById("unme");
	var password = document.getElementById("passwd");
	var usererror = document.getElementById("usererror");
	var passerror = document.getElementById("passerror");
	
	if(uname.value==""){
		usererror.innerHTML = "Enter your username";
	}	
	if(password.value==""){
		passerror.innerHTML = "Enter your password";
	}
}		



/*Function to send the message to the user registered
*/
function sendMessage(){
	var username = document.getElementById("unme");
	var phonenumber = document.getElementById("pnm");
	var message= username+ "successfully registered to WatchMe";
    var url = 'api.deywuro.com/bulksms/?username=AshesiMoney&password=ashesi@123&type=0&dlr=1&destination='+phonenumber+'&source=WatchMe&message='+ message;
 
}












