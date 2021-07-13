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
     resetGrid()
}
function resetGrid() {
    numo = prompt("Please insert the size of your desired grid: (Number between 1-100)");
    if (parseInt(numo) > 100) {
        alert("Number exeeds the limit, Please try again")
         resetGrid;
    }
    else if (parseInt(numo) < 0) {
        alert("Number is a negative, Please try again")
         resetGrid;
    }
    else {
    removeAllChildNodes(document.getElementById("container"))
    document.getElementById("container").style.gridTemplateRows = ""
    document.getElementById("container").style.gridTemplateColumns = ""
num = parseInt(numo) + 1
    numsq = numo*numo ; numsq += 1;
    for(y=1; y < num; y++) {
        document.getElementById("container").style.gridTemplateRows += ` ${Math.floor(500/num)}px `
       document.getElementById("container").style.gridTemplateColumns += ` ${Math.floor(500/num)}px `
       console.log('loop row number '+y)
    }
    for(i=1; i<numsq; i++) {
        console.log("addin element "+ i)
        addElement(i)
    }
    childs = document.getElementById("container").children;
    //childs.style.backgroundColor = ""
    for (i = 0; i < childs.length; i++) {
      childs[i].style.value = `width :${40/childs.length}rem`; //height :${40/childs.length}rem `
     }
    }
    }

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
resetGrid()
