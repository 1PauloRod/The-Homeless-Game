

class Homeless{
    constructor(){
        this.homelessArray = [];
        this.homelessLeftImg = document.getElementById("homelessLeft");
        this.homeless3LeftImg = document.getElementById("homeless3Left");
        this.imgArray = [];
        this.imgArray.push(this.homelessLeftImg);
        this.imgArray.push(this.homeless3LeftImg);
        this.frameHomeless = 0;
        this.numberOfFrameHomeless = 8;
        this.colorTest = "blue";
    }


    addHomeless(){
        this.homelessArray.push({
            position: {x: canvas.width + 100, y: 400}, 
            velocity: {x: Math.floor(Math.random() * (4 - 3 + 1) + 3), y: 1}, 
            size: {width: 300, height: 400}, 
            imgIndex: Math.floor(Math.random() * this.imgArray.length)
        });
    }


    update(){
        this.homelessArray.forEach(homeless => {
            homeless.position.x -= homeless.velocity.x;
            homeless.position.y += homeless.velocity.y;

            if (homeless.position.y + homeless.size.height + homeless.velocity.y < canvas.height - 100){
                homeless.velocity.y += GRAVITY;
            }else{
                homeless.velocity.y = 0;
            }
        });
    }

    draw(){
        this.homelessArray.forEach(homeless => {
                /*ctx.beginPath();
                ctx.fillStyle = this.colorTest;
                ctx.rect(homeless.position.x + 768/7, homeless.position.y + 190, homeless.size.width - 235, homeless.size.height - 200);
                ctx.fill();
                ctx.closePath();*/

                ctx.drawImage(this.imgArray[homeless.imgIndex], 
                    this.frameHomeless * 1024/8, 0,
                    1024/8, 128, 
                    homeless.position.x, homeless.position.y, 
                    homeless.size.width, homeless.size.height);
        });
    }
}
