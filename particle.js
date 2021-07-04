class Particle{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	 var options={
		 restitution:0.3,
		 friction:5,
		 density:1,
	 }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var Particlepos=this.body.position;		
			push()
			translate(Particlepos.x, Particlepos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			pop();
	}

}