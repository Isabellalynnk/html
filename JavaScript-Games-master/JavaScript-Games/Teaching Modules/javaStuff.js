
function number1() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "You pressed OK!, now you are going to see more stuff!!!!";
    } else {
        x = "Why did you press cancel, you hurt my feelings.";
    }
    document.getElementById("test").innerHTML = x;
}
function number2() {
    var nameEntered = prompt("Please enter your name", " Example: John Smith ");
    //var doubleSecret;

    if (nameEntered != null) {
        document.getElementById("name").innerHTML =
        "Hello " + nameEntered + "! How are you today?";
    }
		//else(nameEntered == doubleSecret){
		//document.getElementByID("name").innerHTML =
		//"Hello " + nameEntered + " the secrete password is Chinese";
	}
  var myVar = setInterval(myTimer, 1000);

  function myTimer() {
      var d = new Date();
      document.getElementById("demoClock").innerHTML = d.toLocaleTimeString();
  }
