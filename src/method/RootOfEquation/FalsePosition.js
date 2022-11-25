import * as React from "react";
import { Parser } from "expr-eval";
import Chart from './Chart';

var XLA = [];
var XRA = [];
var XMA = [];
var LOOP = [];

const FalsePositionFuction = (Xl,Xr,Function) => {
    const parser = new Parser();
    const func = (x) =>{
        let expr = parser.parse(Function);
        return expr.evaluate({x: (x)});
    }
    var xl = Xl;
    var xr = Xr;
    var Error = 0;
    var xm, xold;
    var i = 0;
    var count = 0;
    do{
        xm=((Number(xl)*func(xr))-(xr*func(xl)))/(func(xr)-func(xl));
        XLA.push(xl);
        XRA.push(xr);
        XMA.push(xm);
        LOOP.push(i++);
        if(func(xm)*func(xr)<0){
            xold = xl;
            xl = xm;
        }
        else if(func(xm)*func(xl)>0){
            xold = xr;
            xr = xm;
        }
        Error = Math.abs((xm-xold)/xm);
        count++;
    }
    while(Error > 0.000001 && count !== 100 );
    return "XM = "+xm;
}

const getValue = () => {
    var Xl = document.getElementById("xl").value;
    var Xr = document.getElementById("xr").value;
    var Function = document.getElementById("Function").value;
    var Xm = FalsePositionFuction(Xl,Xr,Function);
    document.getElementById("ShowXM").innerHTML = Xm;
}

const Falseposition = () => {
    
    return(
        <div>
            <br/>
            <h1 className="headerName">False Position</h1>
            <br/>
            <div className="bodyComponent">
                <form>
                    <div>
                        <label>
                            <h4>XL :</h4>
                        </label>
                        <input className="NumberFill" id = "xl" placeholder = "XL" type = 'number' size='1'></input>
                        <label>    
                            <h4>XR :</h4>
                        </label>
                        <input className="NumberFill" id = "xr" placeholder = "XR" type = 'number' size='1'></input>
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
            <div id="ShowXM" className="ShowXM"></div>
            <div className="chartcontrainer">
                <div id = "showchart" className = 'chart'>
                    <Chart data = {{xm:XMA, xl:XLA , xr:XRA ,loop:LOOP}}/>
                </div>
            </div>
        </div>
    )
}

export default Falseposition;