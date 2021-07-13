function addElement(id) {
    // create a new div element
    const newDiv = document.createElement("div");
    //newDiv.setAttribute('id','gridbox-' + id);
    newDiv.setAttribute('id','gridbox');
    // and give it some content
    //newDiv.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    //newDiv.style.gridArea = `gridarea-${id}`;
    //const newContent = document.createTextNode();
  
    // add the text node to the newly created div
    //newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("container");
    document.getElementById('container').appendChild(newDiv, currentDiv);
    newDiv.addEventListener("mouseover", function() {
        this.style.backgroundColor = '#123456'
    })
  }
  for (i=1; i<257; i++) {
    addElement(i)

  }
  function changeColor(divid, col){
    document.getElementById(`${divid}`).style.color = `${col}`;}
;
;
function resetBoard(){
    childs = document.getElementById("container").children;
    //childs.style.backgroundColor = ""
    for (i = 0; i < childs.length; i++) {
      childs[i].style.backgroundColor = "";
     }
}