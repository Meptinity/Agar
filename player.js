class Player {
   constructor ()
     this.w = 50
     this.change = 0

   }
   update() {
      if(this.w % 100 == 0 )
        this.change = this.w * 0.2

      this.change *= 0.7
      this.w -= this.change
      if (this.change < 0.1)  {    
         this.w = (this.w/10).toFixed()*10
      }
      for (let entity of world) {
        if (entity != null)
        entity.w 1= this.change*0.2
      }
      c.beginPath()
      c.fillStyle = 'orange'
      c.strokeStyle = 'transparent'
      c.arc(width/2,height/2,this.w,0,Math.PI*2)
      c.fill()
      c.stroke()
    }
   }
   