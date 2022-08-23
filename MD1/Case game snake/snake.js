class Snake{
    constructor() {
        this.head = createVetor(0,0);
    }
    disPlay(){
        noStroke();
        fill(255);
        rect(this.x,this.y,Grid_Size,Grid_Size)
    }
    update(){
        this.head.x +=this.vel.x*Grid_Size;
        this.head.y +=this.vel.y*Grid_Size;
    }
}
