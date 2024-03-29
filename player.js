



class Player{
    constructor(){
        this.position = {x: 100, y: 10};
        this.velocity = {x: 0, y: 0};
        this.size = {width: 300, height: 400};
        this.idleRight = document.getElementById("idleRight");
        this.idleLeft = document.getElementById("idleLeft");
        this.frameIdle = 0;
        this.numberOfFrameIdle = 6;
        this.idle2Right = document.getElementById("idle2Right");
        this.frameIdle2 = 0;
        this.numberOfFrameIdle2 = 11;
        this.walkRight = document.getElementById("walkRight");
        this.walkLeft = document.getElementById("walkLeft");
        this.frameWalk = 0;
        this.numberOfFrameWalk = 8;
        this.jumpRight = document.getElementById("jumpRight");
        this.jumpLeft = document.getElementById("jumpLeft");
        this.frameJump = 0;
        this.numberOfFrameJump = 6;
        this.attackRight = document.getElementById("attackRight");
        this.frameattack = 0;
        this.numberOfFrameattack = 5;
        this.activateIdle2 = false;
        DIRECTION_RIGHT = true;
    }

    update(){
        this.position.y += this.velocity.y;

        if (this.position.y + this.size.height + this.velocity.y < canvas.height - 100){
            this.velocity.y += GRAVITY;
        }else{
            this.velocity.y = 0;
        }

        if (this.position.x > 300){
            this.position.x = 300;
        }

        if (this.position.x < 100){
            this.position.x = 100;
        }
    }

    draw(){
        if (keys.d.pressed === true && Math.abs(this.velocity.y) < 1){
            /*ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.rect(this.position.x + 768/7, this.position.y + 190, this.size.width - 235, this.size.height - 200);
            ctx.fill();
            ctx.closePath();*/
    
            ctx.drawImage(this.walkRight, 
                this.frameWalk * 768/6, 0, 
                768/6, 128, 
                this.position.x, this.position.y, 
                this.size.width, this.size.height);
        } 

        else if(keys.a.pressed === true && Math.abs(this.velocity.y) < 1){
            /*ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.rect(this.position.x + 768/7, this.position.y + 190, this.size.width - 235, this.size.height - 200);
            ctx.fill();
            ctx.closePath();*/
    
            ctx.drawImage(this.walkLeft, 
                this.frameWalk * 768/6, 0, 
                768/6, 128, 
                this.position.x, this.position.y, 
                this.size.width, this.size.height);
        }

        else if (Math.abs(this.velocity.y) > 1){
            if (DIRECTION_RIGHT === true){
                /*ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.rect(this.position.x + 768/7, this.position.y + 190, this.size.width - 235, this.size.height - 200);
                ctx.fill();
                ctx.closePath();*/
        
                ctx.drawImage(this.jumpRight, 
                this.frameJump * 2048/16, 0,
                2048/16, 128, 
                this.position.x, this.position.y, 
                this.size.width, this.size.height);
            }else{
                /*ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.rect(this.position.x + 768/7, this.position.y + 190, this.size.width - 235, this.size.height - 200);
                ctx.fill();
                ctx.closePath();*/
        
                ctx.drawImage(this.jumpLeft, 
                this.frameJump * 2048/16, 0,
                2048/16, 128, 
                this.position.x, this.position.y, 
                this.size.width, this.size.height);
            }
        }
        
        else{

            if (this.activateIdle2 === true){
                ctx.drawImage(this.idle2Right, 
                    this.frameIdle2 * 1408/11, 0, 
                   1408/11, 128, 
                    this.position.x, this.position.y, 
                    this.size.width, this.size.height);

            }else{
                if (DIRECTION_LEFT === true){
                    /*ctx.beginPath();
                    ctx.fillStyle = "red";
                    ctx.rect(this.position.x + 768/7, this.position.y + 190, this.size.width - 235, this.size.height - 200);
                    ctx.fill();
                    ctx.closePath();*/

                        ctx.drawImage(this.idleLeft, 
                        this.frameIdle * 768/6, 0, 
                        768/6, 128, 
                        this.position.x, this.position.y, 
                        this.size.width, this.size.height);
                }else{
                    /*ctx.beginPath();
                    ctx.fillStyle = "red";
                    ctx.rect(this.position.x + 768/7, this.position.y + 190, this.size.width - 235, this.size.height - 200);
                    ctx.fill();
                    ctx.closePath();*/

                    ctx.drawImage(this.idleRight, 
                        this.frameIdle * 768/6, 0, 
                        768/6, 128, 
                        this.position.x, this.position.y, 
                        this.size.width, this.size.height);
                }
            }
        }

       
    }
}