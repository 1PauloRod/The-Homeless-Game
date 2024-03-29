




class Floor{
    constructor(){
        this.imgFloor = document.getElementById("floorImg");
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
        ctx.drawImage(this.imgFloor, 
            this.x, 0, 
            canvas.width, canvas.height + 100);

        if (this.x < 0){
            ctx.drawImage(this.imgFloor, 
                this.x + canvas.width, 0, 
                canvas.width, canvas.height + 100);
        }else{
            ctx.drawImage(this.imgFloor, 
                this.x - canvas.width, 0, 
                canvas.width, canvas.height + 100);
        }
        
    }
}