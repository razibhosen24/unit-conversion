var cel = document.getElementById('cel');
var fah = document.getElementById('fah');

cel.addEventListener('input', function() {
  var c = (this.value); // this is the same as cel.value
  var f = c * 9/5 + 32;
  if(!Number.isInteger(f)){
    f = f.toFixed(2);
  }
  fah.value = f;
});
fah.addEventListener('input', function(){
  var f = (this.value); // this is the same as fah.value
  var c = (f - 32) * 5/9;
  if(!Number.isInteger(c)){
    c = c.toFixed(2);
  };
  cel.value = c;
});