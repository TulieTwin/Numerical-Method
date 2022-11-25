import * as React from "react";
import { Parser } from "expr-eval";
import { ReactDOM } from "react";

var XNA = [];

const testskill = () => {
    const Func = (Max,Function) => {
        const parser = new Parser();

        const FN = (x) =>{
            let expr = parser.parse(Function);
            return expr.evaluate({x: (x)});
        }

        var max = Max;
        var xn;
        for(var i=1; i<=max; i++){
            xn = FN(max);
            XNA.push(xn);
        }
        return "X(n) : " + xn;
    }
    
    const getValue = () =>{
        var MAX = document.getElementById("Max").value;
        var FUNCTION = document.getElementById("Function").value;
        var XN = Func(MAX, FUNCTION);
        document.getElementById("ShowXn").innerHTML = XN;
        const TB = ReactDOM.createRoot(document.getElementById('ShowTB'));
        TB.render(
            <div>
                <table>
                    <tr>
                        <th>x</th>
                        <th>f(x)</th>
                    </tr>
                    {XNA.map((val, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{val}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }

    return(
        <div>
            <h1 className="headerName"> Bisection </h1>
            <div className="bodyComponent">
                <div>
                    <label>
                        <h4>n: </h4>
                    </label>
                    <input className="NumberFill" id="Max" placeholder="0.00" type='number'></input>
                </div>
                <br/>
                <div>
                    <label>
                        <h4>Function: </h4>
                    </label>
                    <input className="FnFill" id="function" placeholder="Ex: x^4-1"></input>
                </div>
                <br/>
                <div>
                    <button className="buttonGet" onClick={getValue}>Calculate</button>
                </div>
            </div>
            <hr class="solid"/>
            <div id="ShowXn" className="ShowXM"></div>
            <div id ="ShowTB"></div>
        </div>
    );
}

export default testskill;