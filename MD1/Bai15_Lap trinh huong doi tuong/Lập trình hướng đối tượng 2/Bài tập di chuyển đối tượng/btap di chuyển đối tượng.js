function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speedleft=10;
    this.speedtop=0;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.move(){
        this.left += this.speedleft;
        this.top += this.speedtop;
    }

}

let hero = new Hero('pikachu.png', 20, 30, 200);
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 40) {
        hero.speedleft = 0;
        hero.speedtop = 10;
        hero.move();
    }
    if (e.keyCode == 37) {
        hero.speedleft= -10;
        hero.speedtop= 0;
        hero.move();
    }
    if (e.keyCode == 39) {
        hero.speedleft=10;
        hero.speedtop=0;
        hero.move();
    }
    if (e.keyCode == 38) {
        hero.speedleft=0;
        hero.speedtop=-10
        hero.move();
    }
})

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();