function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#CB997E");
  noFill()//圖形不填色
  stroke("#DDBEA9")//線條顏色
  strokeWeight(5)//線條粗細

  ellipseMode(CENTER)
  rectMode(CENTER)

  for(var j=0;j<(height/50);j++)
  {for(var i=0;i<(width/50);i++)
  {
  rect(25+(i*50),25+(j*50),50+mouseX/5)//大正方形位置
  stroke("#718355")//填色
  rect(25+(i*50),25+(j*50),25)//小正方形位置
  ellipse(25+(i*50),25+(j*50),25+mouseY/10)//方形內小圓位置
  stroke("#a9bcd0")//填色
  ellipse(25+(i*50),25+(j*50),5+mouseY/5)//圓形內小小圓

  
  }
}
}

