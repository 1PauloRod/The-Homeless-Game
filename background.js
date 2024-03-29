


class Background{
    constructor(){
        this.backgroundImg = document.getElementById("backgroundImg");
        this.x = 0;
    }

    update(){
        if (keys.d.pressed === true){
            this.x -= 1;
        }

        if (keys.a.pressed === true){
            this.x += 1;
        }

        if (this.x <= -canvas.width){
            this.x = 0;
        }

        if (this.x > 0){
            this.x = -canvas.width;
        }
    }

    draw(){
        ctx.drawImage(this.backgroundImg, 
            this.x, 0, canvas.width, canvas.height);

        if (this.x < 0){
            ctx.drawImage(this.backgroundImg, 
                this.x + canvas.width, 0, canvas.width, canvas.height);
        }
        else{
            ctx.drawImage(this.backgroundImg, 
                this.x - canvas.width, 0, canvas.width, canvas.height);
        } 
            
    }
}