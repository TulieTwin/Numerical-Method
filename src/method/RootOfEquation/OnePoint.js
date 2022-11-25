import * as React from "react";
import { Parser } from "expr-eval";
import ChartOne from './ChartOne';

const math = require('mathjs');

var X0A = [];
var XNA = [];
var LOOP = [];

const OnePointFn = (X0,Function) => {
    const parser = new Parser();

    const FN = (x) =>{
        let expr = parser.parse(Function);
        return expr.evaluate({x: (x)});
    }
    
    var x0 = X0;
    var xn = 0;
    var Error = 0;
    var i = 0;
    var count = 0;
    while(count<100){
        xn = FN(x0);
        X0A.push(x0);
        XNA.push(xn);
        LOOP.push(i++);
        console.log("Iteration: "+i);
        console.log("Xn: "+xn);
        console.log("x0: "+x0);
        Error = math.abs((Number(xn)-Number(x0))/Number(xn));
        if(Error < 0.000001){
            break;
        }
        else {
            x0 = xn
        }
        count++;
    }
    return "Xn : " + xn;
}


const getValue = () => {
    var X0 = document.getElementById("x0").value;
    var Function = document.getElementById("Function").value;
    var XN = OnePointFn(X0,Function);
    document.getElementById("ShowXn").innerHTML = XN;
}

const OnePoint = () => {
    return(
        <div>
            <br/>
            <h1 className="headerName">One-Point Iteration</h1>
            <br/>
            <div className="bodyComponent">
                <form>
                    <div>
                        <label>
                            <h4>Initial guess :</h4>
                        </label>
                        <input className="NumberFill" id = "x0" placeholder = "x0" type = 'number' size='1'></input>
                    </div>
                    <br/>
                    <div>
                        <label>    
                            <h4>Function :</h4>
                        </label>
                            <input className="FnFill" id = "Function" placeholder="Ex: x*43-1"size='15'></input>
                        </div>
                    <br/>
                </form>
                    <div>
                        <button className="buttonGet" onClick={getValue}>Calculate</button>
                    </div>
            </div >
            <hr class="solid"/>
            <div id="ShowXn" className="ShowXM"></div>
            <div className="chartcontrainer">
                <div id = "showchart" className = 'chart'>
                    <ChartOne data = {{xn:XNA , x0:X0A ,loop:LOOP}}/>
                </div>
            </div>
        </div>
    );
}

export default OnePoint;