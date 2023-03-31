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

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    this.size.width = newSize.width > this.screenSize.width ? this.screenSize.width : newSize.width >= 1 ? newSize.width : 1;
    this.size.height = newSize.height > this.screenSize.height ? this.screenSize.height : newSize.height >= 1 ? newSize.height : 1;
  }

  move(newPosition) {
    this.position.horizontalPos = newPosition.horizontalPos > this.size.width ? this.size.width : newPosition.horizontalPos > 0 ? newPosition.horizontalPos : 0;
    this.position.verticalPos = newPosition.verticalPos > this.size.height ? this.size.height : newPosition.verticalPos > 0 ? newPosition.verticalPos : 0;
  }
}

const test = new ProgramWindow();
const test2 = new Size(900,400)
const test3 = new Position(50, 100)
console.log(test)
test.resize(test2);
console.log(test)
test.move(test3)
console.log(test)

function changeWindow(programWindowInstance) {
  const changedSize = new Size(400, 300);
  const changedPos = new Position(100, 150);
  programWindowInstance.resize(changedSize);
  programWindowInstance.move(changedPos);
  return programWindowInstance;
}

console.log(changeWindow(test))