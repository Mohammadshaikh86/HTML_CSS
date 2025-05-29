document.getElementById('myButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red'; 
});
document.getElementById('myButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
let colors = ['red', 'green', 'blue', 'black', 'yellow'];
let currentIndex = 0;
document.getElementById('myButton').addEventListener('click', function() {
    this.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});