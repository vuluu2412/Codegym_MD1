class Food{
    constructor() {
        this.newFood();
    }
    newFood(){
        this.x = Math.floor(random(Width));
        this.y = Math.floor(random(Height));
        this.x = Math.floor(this.x/Grid_Size)*Grid_Size;
        this.y = Math.floor(this.y/Grid_Size)*Grid_Size;
    }
    disPlay(){
        fill(255,40,0);
        rect(this.x,this.y,Grid_Size,Grid_Size);
    }
}