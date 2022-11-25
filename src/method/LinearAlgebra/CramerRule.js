import React from "react";
const math = require('mathjs');

function Getmat(){
    var Size = document.getElementById("Matnum").value;
    var MatString = "";
    for(var i =  0; i<Size ; i++){
        for(var j = 0 ; j<Size ; j++){
            MatString +=" <input id = 'Matrix'"+i+j+" className = 'inputmat' placeholder=' ' type='number' style='width: '40px''></input>"
        }
        MatString +=" b"+i+""+' '+" <input id = 'Matrixans'"+i+j+" className = 'inputmatans' placeholder=' ' type='number' style='width: '40px''></input><br>";
    }
    document.getElementById("Matrix").innerHTML = MatString;
}

function getmat2(){
    var Size = document.getElementById("Matnum").value;
    for(var i = 0 ; i<Size ; i++){
        for(var j = 0 ; j<Size ; j++){
            var MatA = document.getElementById("Matrix"+i+j).value;
        }
        var MatB = document.getElementById("Matrixans"+i+j).value;
    }
    var ans = Cal(MatA,MatB);
    console.log(ans);
    document.getElementById("Showans").innerHTML = ans;
}

function Cal(a,b){
    var A = parseInt(a);
    var B = parseInt(b);
    var x = [];
    var bchange = b;
    var deta = math.det(a)
    function setArray(a,i)
        {
            for(var j = 0 ; j < B.length ; j++)
            A[j][i] = B[j]
            return a
        }
        for(var i = 0 ; i < A.length ; i++)
        {
            A[i] = math.det(setArray(A,i))/deta
            b = bchange;
        }
    return "Y = "+x;
}

function ChamerRule(){
    return(
        <div><h1 style={{color:'black',paddingLeft:'685px',paddingTop:'75px'}}>Chamer_Rule</h1>
        <div className="containerBi" style={{color:'black'}}>
        <form>
            <label>
                <h4 style={{paddingLeft:'50px'}}>Number of Matrix :</h4>
            </label> 
                <input id = "Matnum" placeholder=" " type='number' style={{ width: "40px" }} size='1'></input>
        </form>
        <div style={{paddingLeft:'170px'}}>
            <button onClick={Getmat}>Submit</button>
        </div>
        <div id = 'Matrix' className="matrix" style={{paddingTop:'10px'}}></div>
        <div style={{paddingLeft:'160px',paddingTop:'20px'}}>
            <button onClick={getmat2}>Calculate</button>
        </div>
        <div id = 'Showans'></div>
        </div>
        </div>
    )
}

export default ChamerRule;