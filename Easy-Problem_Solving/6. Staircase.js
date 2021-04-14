function staircase(n) {
  for(let i = 0; i < n; i++) {
    let space = "";
    for(let j = 0; j < n -i - 1; j++){
      space += " ";
    }
    for(let k = 0; k < i + 1; k++){
      space += "#"
    }
    console.log(space)
  }
}

staircase(4);


/****************************************************************
 *-----------------------Other Solution--------------------------
 ***************************************************************/

function staircase(n) {
  let filledArray = new Array(n).fill(" ");
  while (filledArray.indexOf(" ") !== -1) {
    filledArray.shift();
    filledArray.push("#");
    console.log(filledArray.join(""));
    n--;
  }
}

staircase(4)
