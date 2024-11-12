var el;
var height; 
var width;
document.addEventListener("DOMContentLoaded", function() {
    /* Store the element in el */

    el = document.getElementById('cardmodel1');
    
    /* Get the height and width of the element */
    height = el.offsetHeight
    width = el.offsetWidth
    
    /*
      * Add a listener for mousemove event
      * Which will trigger function 'handleMove'
      * On mousemove
      */
    document.getElementById('cardmodel1').addEventListener('mousemove', handleMove)
});

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = (10 * ((xVal - width / 2) / width))
  
  /* Calculate the rotation along the X-axis */
  const xRotation = (-10 * ((yVal - height / 2) / height))
  
  /* Generate string for CSS transform property */
  const string = 'perspective(400px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(200px) scale(0.5) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(200px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(200px) scale(1) rotateX(0) rotateY(0)'
})