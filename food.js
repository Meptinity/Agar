class food {}
  constructor(range)  {
    this.w = 10 
    this.range = range || 1 
    this.x = Math.random() * width * this.range 
    this.x = Math.random() * width * this.range 
    world[id] =rhis
    this.id = id 
  }
  update() {
      this.dx = Math.abs(width/2 - this.x)
      this.dy = Math.abs(height/2 - this.y)
      this.d = Math.sqrt((this.dx ** 2) + (this.dx)
      if (this.d < (this.w + player.w)) {
         playerr.w += 10
         console.log(player.w);
         delete world[this.id]  
        }
        
        console.beginPath()
        c.fillStyle = 'rgb(80,30,0)'
        // c.strokeStyle = 'transparent'
        c.arc(this.x,this.y,this.w,0,Math.PI*2)
        c.fill()
        c.storke()
      }
    }