var body;



var Snake = function(con){
    this.context = con;
    this.direction = 
    {
        UP:false,  
        DOWN:false,
        LEFT:false,
        RIGHT:true   // indico en que direccion se mueve mi serpiente inicialmente
    };   
    this.longitude = 1;
    this.x = 100;
    this.y = 100;
    this.speed = 10;
    this.key =
    {
        UP:38,  // usando el codigo ASCII del teclado 
        DOWN:40,
        LEFT:37,
        RIGHT:39
    };   

}

Snake.prototype.drawSnake = function(x,y,long){

}



function start () {
    var canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 500;
    var ctx = canvas.getContext("2d");
    body = new Snake(ctx);

    document.addEventListener("keydown", keyboard);
    
}

keyboard = function (data){

    var direction = data.keyCode;
    console.log(direction);


}