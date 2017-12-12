
//variables
var camera;
var gps;

/*Function to take a picture using the camera plugin
*/
function takePicture(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL });
}
//on success
function onSuccess(imageURI) {
    camera = imageURI;
}
//on error
function onFail(message) {
    alert('Failed because: ' + message);
}




/* Function to get the location of the whistle blower
   By the time they send the report to the authorities
*/
function getlocation(){
navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
//on success
function onSuccess(position) {
    gps=position.coords.latitude+","+position.coords.longitude;    
     }
//on error
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}





/*Function to upload from gallery
  posts to the uploadReport.php which communicates with the server
  to store the data
*/
function sendReport(){

	var category= document.getElementById('option').value;
	var description= document.getElementById('description').value;
	var image = camera;

	//get the location before uploading 
	getlocation();

    //get an HttpRequest
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
                            alert("Upload successful");
                            } else {
                            	console.log(this.responseText);                            	
                            }
                          }
                        };
		
		  //post the data 
		  xhttp.open("GET", "https://watchmeorg.000webhostapp.com/upload.php?category="+category+"&description="+description+"&image="+image+"&location="+gps, true);		  
		  xhttp.send();
		}

