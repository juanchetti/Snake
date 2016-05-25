var body;
var i = 0;

// Properties __________________________________________________

var xMin = 0;
var xMax = 500;
var yMin = 0;
var yMax = 500;
var speed = 10;
var curva = new Array();
var cambioDireccion = false;

//var fps = 60;
//var interval = 100000 / fps;
var direction = 39;   // direccion es la variable en donde se esta movinedo la tecla  
    
var key =
    {
        UP:38,  // usando el codigo ASCII del teclado 
        DOWN:40,
        LEFT:37,
        RIGHT:39
    }; 


// Logic _______________________________________________________


var nIntervID;
var cuenta = 1;

var contador = function()
{
    cuenta += 1;
    console.log(cuenta);
}


var Snake = function(con){
    this.context = con;
   
    this.longitude = 50;
    this.vivo = true;
    this.cabezaX = 100;
    this.cabezaY = 100;
    this.colaX = this.cabezaX - speed;
    this.colaY = this.cabezaY;
    
    this.drawSnake();
    
    // alert("a punto de iniciar setInterval al startGame");
    nIntervID = setInterval("body.drawSnake()", 100);
}

Snake.prototype.drawSnake = function()
{
    // alert("dibuja");
    draw = this.context;
    
    
    // dibujando un recuadro
    draw.fillRect(0,0,xMax,yMax);
    draw.clearRect(speed,speed,xMax - 2*speed,yMax - 2*speed);

    //draw.strokeRect(0,0,50,50);
    
    //Dibujando la serpiente
    if (direction == key.UP)
    {
        this.colaX = this.cabezaX;
        this.colaY = this.cabezaY + speed;
        // dibujo serpiente moviendose hacia ARRIBA
        draw.beginPath();
        draw.moveTo(this.cabezaX,this.cabezaY);//cabeza de serpiente
        draw.lineTo(this.colaX,this.colaY);//cola de serpiente
        draw.lineWidth = speed;
        draw.strokeStyle = "#000";
        draw.stroke();
        draw.closePath();
    }
    if (direction == key.DOWN) 
    {
        this.colaX = this.cabezaX;
        this.colaY = this.cabezaY - speed;
        // dibujo serpiente moviendose hacia ABAJO
        draw.beginPath();
        draw.moveTo(this.cabezaX,this.cabezaY);//cabeza de serpiente
        draw.lineTo(this.colaX,this.colaY);//cola de serpiente
        draw.lineWidth = speed;
        draw.strokeStyle = "#000";
        draw.stroke();
        draw.closePath();
    }
    if (direction == key.RIGHT) 
    {          
        i += 1;
        console.log(i);
        this.colaX = this.cabezaX - speed;
        this.colaY = this.cabezaY;
        // dibujo serpiente moviendose hacia DERECHA
        draw.beginPath();
        draw.moveTo(this.cabezaX,this.cabezaY);//cabeza de serpiente
        draw.lineTo(this.colaX,this.colaY);//cola de serpiente
        draw.lineWidth = speed;
        draw.strokeStyle = "#000";
        draw.stroke();
        draw.closePath();

    }
    if (direction == key.LEFT) 
    {
        this.colaX = this.cabezaX + speed;
        this.colaY = this.cabezaY;
        // dibujo serpiente moviendose hacia IZQUIERDA
        draw.beginPath();
        draw.moveTo(this.cabezaX,this.cabezaY);//cabeza de serpiente
        draw.lineTo(this.colaX,this.colaY);//cola de serpiente
        draw.lineWidth = speed;
        draw.strokeStyle = "#000";
        draw.stroke();
        draw.closePath();
        
    }
    // this.ciclo(this.cabezaX,this.cabezaY,direction);
    //alert("a punto de ir al moveSnake");
    //this.moveSnake();

    if (this.cabezaX < xMin + speed || 
        this.cabezaX > xMax - speed ||
        this.cabezaY < yMin + speed ||
        this.cabezaY > yMax - speed ) 
    {
        alert("PERDISTE, HAS CHOCADO");
        this.vivo = false;
        clearInterval(nIntervID);
        // stopGame();
    }
    else 
    {
        // con cada ciclo cambio la pocision de la serpiente en funcion de su direccion
        if (direction == key.UP)
        {
            this.cabezaY -= speed;
            this.colaY
        }
        if (direction == key.DOWN) 
        {
            this.cabezaY += speed;
        }
        if (direction == key.RIGHT) 
        {
            this.cabezaX += speed;
            this.colaX += speed;
        }
        if (direction == key.LEFT) 
        {
            this.cabezaX -= speed;
        }
        //body.drawSnake(this.cabezaX,this.cabezaY,this.longitude);
    } 
    //alert("a punto de salir del moveSnake");
    cambioDireccion = false;
}




// Snake.prototype.moveSnake = function()
// {
    
   
// }


Snake.prototype.startGame = function() {
    alert("a punto de iniciar setInterval al drawSnake");
    this.drawSnake();

}    

Snake.prototype.stopGame = function() {
    
}
    
    





function start () 
{
    var canvas = document.getElementById("canvas");
    canvas.width = xMax;
    canvas.height = yMax;
    var ctx = canvas.getContext("2d");
    body = new Snake(ctx);

    document.addEventListener("keydown", changeDirection);

        
}

function changeDirection(data) 
{
    direction = data.keyCode;   // guardo el numero de la tecla optrimida
    console.log(direction);
    if (direction == key.UP || direction == key.DOWN || direction == key.LEFT || direction == key.RIGHT)
    {
        cambioDireccion = true;
        // body.moveSnake();
    }
    else
    {
        // error solo se pueden usar las flechas del teclado.
        alert("ERROR: solo puedes usar las flechas del teclado.");
    }
}

