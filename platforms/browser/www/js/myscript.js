

function validateregistration(){	
	//These are the commands for getting the elements from the html file
	var fname = document.getElementById("fnm");
	var lname = document.getElementById("lnm");
	var uname = document.getElementById("unm");
	var email = document.getElementById("eml");
	var age = document.getElementById("age");
	var pnumber = document.getElementById("pnm");
	var uerror = document.getElementById("uerror");
	var perror = document.getElementById("perror");
	var emerror = document.getElementById("emerror");
	var ferror = document.getElementById("ferror");
	var lerror = document.getElementById("lerror");
	var gerror = document.getElementById("gerror");
	var merror = document.getElementById("merror");

	//validating username
	if(uname.value==""){
		uerror.innerHTML = "Please enter your username";
	}else{
		if(!preg_match('/^[a-zA-Z ]+$/', uname)){
			uerror.innerHTML = "Enter only alphabetical letters";
		}		
	}

	//validating firstname
	if(fname.value==""){
		ferror.innerHTML = "Please enter your first name";
	}else{
		if(!preg_match('/^[a-zA-Z ]+$/', fname)){
			ferror.innerHTML = "Enter only alphabetical letters";
		}		
	}

	//validating lastname
	 if(lname.value==""){
		lerror.innerHTML = "Please enter your last name";
	}else{
		if(!preg_match('/^[a-zA-Z ]+$/', lname)){
			lerror.innerHTML = "Enter only alphabetical letters";
		}		
	}

	//validating email
	if(email.value==""){
		emerror.innerHTML = "Enter your email address";
	}else{
	  if(!preg_match('/^\w+([\.-]?\w+)*@\w+([\.-]??\w+)*(\.\w{2,3})+$/', email)){
			emerror.innerHTML = "Enter your email in the correct format";
	  }		
	}

	//validating age
	 if(lname.value==""){
		lerror.innerHTML = "Please enter your age";	
	}
	
	//validating phonenumber
	 if(lname.value==""){
		lerror.innerHTML = "Please enter your phonenumber";
	}
		
}


//Function to send the message
function sendMessage(){
	var username = document.getElementById("unme");
	var pnumber = document.getElementById("pnm");
	var message= username+ "successfully registered to WatchMe";
    var url = 'api.deywuro.com/bulksms/?username=AshesiMoney&password=ashesi@123&type=0&dlr=1&destination='+pnumber+'&source=GHeSecurity&message='+ message;
 
}



//function to validate the login
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


//function to login as a user
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



//function to register as a user
function registerAsUser(){
	var usern= document.getElementById('unme').value;
	var pass= document.getElementById('passwd').value;
	var age= document.getElementById('age').value;
	var pnumber= document.getElementById('pnm').value;
	var mail= document.getElementById('eml').value;
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
		  xhttp.open("GET", "https://watchmeorg.000webhostapp.com/register.php?username="+usern+"&password="+pass+"&age="+age+"&phonenumber="+pnumber+"&email="+mail, true);		  
		  xhttp.send();
		}


function upload(){
	alert("successfully uploaded");
}

