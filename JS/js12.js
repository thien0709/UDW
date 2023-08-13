const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Draw square with blue color
  ctx.fillStyle = '#66FFFF';
  ctx.fillRect(50, 50, 200, 200);

  // Draw circle with red color
  const gradient = ctx.createRadialGradient(150, 150, 50, 150, 150, 100);
  gradient.addColorStop(0, 'white');
  gradient.addColorStop(1, 'red');
  
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw diamond with yellow color
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(150, 50);
  ctx.lineTo(250, 150);
  ctx.lineTo(150, 250);
  ctx.lineTo(50, 150);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'red';
  ctx.stroke();

  // Draw "HTML5" text inside the diamond
  ctx.fillStyle = 'black';
  ctx.font = ' 2rem Magneto';
  ctx.fillText('HTML5', 75, 160);