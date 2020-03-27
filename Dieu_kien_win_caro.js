function unitedWeStand_Colum (){
    let i=0;
    let test1 = "X,X,X,X,X"
    let test2 = "O,O,O,O,O"
    let arr = []
    while (i<CARO_ROW){
        for( let j=0;j<CARO_COLUMN;j++){
            if(checkBoard[i][j]%2 !== 0){
                arr.push(checkBoard[i][j]);
                arr.push(checkBoard[i+1][j]);
                arr.push(checkBoard[i+2][j]);
                arr.push(checkBoard[i+3][j]);
                arr.push(checkBoard[i+4][j]);
                if(arr.toString() === test1 || arr.toString() === test2){
                    alert('United We Stand')
                } else {
                    arr = []
                }
            }
        }
        i++
    }
}
function unitedWeStand_Row (){
    let j=0;
    let test1 = "X,X,X,X,X"
    let test2 = "O,O,O,O,O"
    let arr = []
    while (j<CARO_ROW){
        for(let i=0;i<CARO_COLUMN;i++){
            if(checkBoard[i][j]%2 !== 0){
                arr.push(checkBoard[i][j]);
                arr.push(checkBoard[i][j+1]);
                arr.push(checkBoard[i][j+2]);
                arr.push(checkBoard[i][j+3]);
                arr.push(checkBoard[i][j+4]);
                if(arr.toString() === test1 || arr.toString() === test2){
                    alert('United We Stand')
                } else {
                    arr = []
                }
            }
            console.log(arr.toString())
        }
        j++
    }
}
function unitedWeStand_Cross1 (){
    let j=0;
    let test1 = "X,X,X,X,X"
    let test2 = "O,O,O,O,O"
    let arr = []
    while (j<CARO_ROW){
        for(let i=0;i<CARO_COLUMN;i++){
            if(checkBoard[i][j]%2 !== 0){
                arr.push(checkBoard[i][j]);
                arr.push(checkBoard[i+1][j+1]);
                arr.push(checkBoard[i+2][j+2]);
                arr.push(checkBoard[i+3][j+3]);
                arr.push(checkBoard[i+4][j+4]);
                if(arr.toString() === test1 || arr.toString() === test2){
                    alert('United We Stand')
                } else {
                    arr = []
                }
            }
        }
        j++
    }
}
function unitedWeStand_Cross2 (){
    let j=0;
    let test1 = "X,X,X,X,X"
    let test2 = "O,O,O,O,O"
    let arr = []
    while (j<CARO_ROW){
        for(let i=0;i<CARO_COLUMN;i++){
            if(checkBoard[i][j]%2 !== 0){
                arr.push(checkBoard[i][j]);
                arr.push(checkBoard[i-1][j+1]);
                arr.push(checkBoard[i-2][j+2]);
                arr.push(checkBoard[i-3][j+3]);
                arr.push(checkBoard[i-4][j+4]);
                if(arr.toString() === test1 || arr.toString() === test2){
                    alert('United We Stand')
                } else {
                    arr = []
                }
            }
        }
        j++
    }
}
function checkWin(){
    unitedWeStand_Row()
    unitedWeStand_Colum()
    unitedWeStand_Cross1()
    unitedWeStand_Cross2()
}