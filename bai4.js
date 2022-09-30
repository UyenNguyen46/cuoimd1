class Rect {
    x;
    y;
 chieudai
 chieurong;

    constructor(chieudai,chieurong,x,y) {
     this.x = x;
     this. y = y;
     this.chieudai = chieudai;
     this.chieurong = chieurong;
    }

}
 let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  ctx.fillRect(10,10,200,100);
