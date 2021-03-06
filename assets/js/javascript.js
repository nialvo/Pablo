//load images and canvas to script
var orbs = document.getElementById("imageLoader").children;
var norbs = orbs.length;
var pos = new Array(norbs);
var canvas = document.getElementById("viewScreen");
var ctx = canvas.getContext("2d");

//draw background onto canvas

ctx.drawImage(orbs[0],0,0);

//create position array
for(var i=0; i<norbs; i++){

    pos[i] = new Array(2);
}



//when button is clicked
function draw(){

    //change button text                    
    document.getElementById("B").innerHTML="Click to make a new one!"

    //seed pseudorandom number generator
    var roll = Date.now()%1000;

    //pseudorandom number generator, set positions
    for(var i=0; i<norbs; i++){
    
    roll*=2.34568;
    pos[i][0]=290 + 150*Math.sin(roll);
    roll*=2.34568;
    pos[i][1]=352+190*Math.sin(roll);
    
    }

    //draw image elements on canvas 

    //clear previous drawing
    ctx.clearRect(0,0,584,705);

    //draw background
    ctx.drawImage(orbs[0],0,0);


    //draw randomly positioned elements
    for(var i=1; i<norbs; i++){

        ctx.drawImage(orbs[i], pos[i][0]-orbs[i].width/2, pos[i][1]-orbs[i].height/2);
        console.log(orbs[i].width);
        console.log(orbs[i].height);

    }
    

}

