const element = document.getElementById("car");
function Hero(image, top, left, width, height){
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.speed = 20;

    this.getHeroElement = function(){
        return '<img id="car" width="'+ this.width + '"' +
            ' height="'+ this.height + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveBottom = function(){
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }
    // this.moveLeft = function(){
    //     this.left -= this.speed;
    //     console.log('ok: ' + this.left);
    // }
    // this.moveTop = function(){
    //     this.top -= this.speed;
    //     console.log('ok: ' + this.top);
    // }

}

var hero = new Hero('car1.png', 20, 30, 100, 200);

function start(){
    if(hero.left < window.innerWidth - hero.width - 20){
        hero.moveRight();
    }
    else if (hero.top < window.innerHeight - hero.height - 20) {
        hero.moveBottom();
    }
    // else if (hero.left > window.innerWidth - hero.size - 20) {
    //     hero.moveLeft();
    // }
    // else if (hero.top > window.innerHeight - hero.size - 20) {
    //     hero.moveTop();
    // }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();