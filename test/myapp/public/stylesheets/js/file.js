var path = new Path.Rectangle({
  points: [75, 75],
  size: [75, 75],
  strokeColor: 'white'
});

function onFrame(){

  path.rotate(3);
  $('#canvas');
};