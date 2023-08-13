const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Draw square with blue color
  ctx.fillStyle = '#66FFFF';
  ctx.fillRect(50, 50, 200, 200);

  // Draw circle with red color
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
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

  // Draw "HTML5" text inside the diamond
  ctx.fillStyle = 'black';
  ctx.font = ' 2rem Consolas';
  ctx.fillText('HTML5', 110, 160);