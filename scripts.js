function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

function Position(x = 0, y = 0) {
  this.horizontalPos = x;
  this.verticalPos = y;
}

Position.prototype.move = function(newX, newY) {
  this.horizontalPos = newX;
  this.verticalPos = newY;
}

