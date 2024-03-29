canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 



class Game{
    constructor(){
        this.player = new Player();
        this.homeless = new Homeless();
        this.background = new Background();
        this.floor = new Floor();
        this.pigeon = new Pigeon();
        this.lastUpgradeTime = 0; 
        this.frameDuration = 1000/12;
        this.frameCount = 0;
        this.frameCountIdle2 = 1;
    }


    collision(){
        this.homeless.homelessArray.forEach(homeless => {
            if (this.player.position.x + 768/7 + this.player.size.width - 235 > homeless.position.x + 768/7 &&
            this.player.position.x + 768/7 < homeless.position.x + 768/7 + homeless.size.width - 235 &&
            this.player.position.y + 190 >= homeless.position.y + 190){
                this.homeless.colorTest = "yellow";
            }else{
                this.homeless.colorTest = "blue"; 
            }
        });
    }

    upgrade(currentTime){
        document.addEventListener("keydown", (event) => {
    
            switch(event.key){
                case 'd':
                    keys.d.pressed = true;
                    DIRECTION_RIGHT = true;
                    DIRECTION_LEFT = false;
                    break;
                case 'a':
                    keys.a.pressed = true;
                    DIRECTION_RIGHT = false;
                    DIRECTION_LEFT = true;
                    break;
                case 'w':
                    if (this.player.velocity.y === 0){
                        keys.w.pressed = true;
                    }
                    break;

                case 'e':
                    keys.e.pressed = true;
                    break;
            }
        })

        document.addEventListener("keyup", (event) => {
  
            switch(event.key){
                case 'd':
                    keys.d.pressed = false;
                    break;
                case 'a':
                    keys.a.pressed = false;
                    break;
                case 'w':
                    keys.w.pressed = false;
                    break;

                case 'e':
                    keys.e.pressed = false;
                break;
            }
        })
        
        

        if (!this.lastUpgradeTime){
            this.lastUpgradeTime = currentTime;
        }
        var deltaTime = currentTime - this.lastUpgradeTime;
        if (deltaTime > this.frameDuration){
            if (this.player.frameIdle < this.player.numberOfFrameIdle - 1){
                this.player.frameIdle++;
            }else{
                this.player.frameIdle = 0;
            }

            if (this.pigeon.frame < this.pigeon.numberOfFrame - 1){
                this.pigeon.frame++;
            }else{
                this.pigeon.frame = 0;
            }

            if (this.homeless.frameHomeless < this.homeless.numberOfFrameHomeless - 1){
                this.homeless.frameHomeless++;
            }else{
                this.homeless.frameHomeless = 0;
            }

            if (this.player.frameIdle2 < this.player.numberOfFrameIdle2 - 1){
                this.player.frameIdle2++;
            }else{
                this.player.frameIdle2 = 0;
            }
            
            this.lastUpgradeTime = currentTime;
        }
        

        if (keys.d.pressed === true){

            if (deltaTime > this.frameDuration){
                if (this.player.frameWalk < this.player.numberOfFrameWalk - 1){
                    this.player.frameWalk++;
                }else{
                    this.player.frameWalk = 0;
                }
            this.lastUpgradeTime = currentTime;
            }
            this.player.velocity.x = 4;
            this.player.position.x += this.player.velocity.x;
        }

        if (keys.a.pressed === true){
            
            if (deltaTime > this.frameDuration){
                if (this.player.frameWalk < this.player.numberOfFrameWalk - 1){
                    this.player.frameWalk++;
                }else{
                    this.player.frameWalk = 0;
                }
            this.lastUpgradeTime = currentTime;
            }
            this.player.velocity.x = -4;
            this.player.position.x += this.player.velocity.x;
        }

        
        if (deltaTime > this.frameDuration){
            if (this.player.frameJump < this.player.numberOfFrameJump - 1){
                this.player.frameJump++;
            }else{
                this.player.frameJump = 0;
            }

            this.lastUpdateTime = currentTime;
        }
        if (keys.w.pressed === true){
            
            if (this.player.velocity.y === 0)
                
                this.player.velocity.y = -25;
        }

        if (this.frameCount % Math.floor(Math.random() * (1000 - 100 + 1) + 100) == 0){
            this.homeless.addHomeless();
        }

        if (this.frameCountIdle2 % 260 == 0){
            this.player.activateIdle2 = true;
        
        }
        if(this.frameCountIdle2 % 295 == 0){
            this.player.activateIdle2 = false;
            this.frameCountIdle2 = 1;
        }
        
        this.collision();
        this.background.update();
        this.floor.update();
        this.homeless.update();
        this.pigeon.update();
        this.player.update();

        this.frameCount++;
        this.frameCountIdle2++;
    }

    

    draw(){
        this.background.draw();
        this.floor.draw();
        this.homeless.draw();
        this.pigeon.draw();
        this.player.draw();
    }
}



var game = new Game();


function animate(currentTime){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.upgrade(currentTime);
    game.draw();
    requestAnimationFrame(animate);
} animate();


