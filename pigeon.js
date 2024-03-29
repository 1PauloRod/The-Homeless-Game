


class Pigeon{ 
    constructor(){
        this.pigeons = [];
        this.pigeons.push({
            position: {x: canvas.width, y: 100}, 
            velocity: {x: 5, y: 0}
        },
        {position: {x: canvas.width - 20, y: 140}, 
            velocity: {x: 5, y: 0}
        },  
        {position: {x: canvas.width, y: 180}, 
            velocity: {x: 5, y: 0}
        }
    );
        
        this.pigeonFlyLeft = document.getElementById("pigeonLeft");
        this.frame = 0;
        this.numberOfFrame = 7;
    }

    update(){
        for (var pigeon of this.pigeons){
            pigeon.position.x -= pigeon.velocity.x;
            if (pigeon.position.x < -3200){
                pigeon.position.x = canvas.width;
            }
        }
        
    }

    draw(){

        for (var pigeon of this.pigeons){
            ctx.drawImage(this.pigeonFlyLeft, 
            this.frame * 224/7, 0,
            224/7, 32, 
            pigeon.position.x, pigeon.position.y, 
            50, 50
            );
        }

            //if (this.frame < 6) this.frame++;
            //else this.frame = 0;
    }
}