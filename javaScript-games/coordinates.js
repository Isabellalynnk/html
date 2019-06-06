var getRandomNumber= function(size){
  return Math.floor(math.random()*size)
};
var width= 400;
var height= 400;
var clicks= 0;

var target= {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

var getDistance= function(event, target){
  var diffx= event.offsetX- target.x;
  var diffy= event.offsety- target.y;
  return Math.sqrt((diffx *diffx) + (diffy*diffy));
};

var getDistanceHint= function(distance){
      if(distance<10){
      return "Boiling Hot!"
    }
    else if (distance<20){
    return "return really hot";
    }
    else if(distance< 40){
      return "Hot";
    }
    else if(distance < 80){
      return "Warm";
    }
    else if (distance<160){
      return "Cold";
    }
    else if(distance< 320){
      return "Really cold";
    }
    else{
      return "Freezing!!!";
    }
};
//Add a click handler to the images
$("#map").click(function(event)){
  //click handler code goes here
  click=click +1;

//gets the distance between the click and the event
var distance= getDistance(event, target);
//convert the distance to show a hint
var distanceHint= getDistanceHint(distance);
//update the distance element in html
$("#distance").text(distanceHint);

if(distance<8){
  alert("Found the treasure" + clicks + "clicks");
}
};
