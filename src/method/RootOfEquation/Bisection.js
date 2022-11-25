import * as React from "react";
import { Parser } from "expr-eval";
import Chart from './Chart';
//import * as ReactDOM from "react-dom";

const math = require('mathjs');

var XLA = [];
var XRA = [];
var XMA = [];
var LOOP = [];

const Bisection = () => {
    const BisectionFn = (XL,XR,Function) => {
        const parser = new Parser();

        const FN = (x) =>{
            let expr = parser.parse(Function);
            return expr.evaluate({x: (x)});
        }
        
        var xl = XL;
        var xr = XR;
        var xm = 0;
        var Error = 0;
        var i =0;
        var count = 0;

        do{
            xm = (Number(xl)+Number(xr))/2;
            XLA.push(xl);
            XRA.push(xr);
            XMA.push(xm);
            LOOP.push(i++);
            if(FN(xm)*FN(xr) > 0){
                Error = math.abs((xm-xr)/xm);
                xr = xm;
            }
            else if(FN(xm)*FN(xr) < 0){
                Error = math.abs((xm-xl)/xm);
                xl = xm;
            }
            count++;
        }
        while(Error > 0.000001 && count !== 100);
        return "XM : " + xm;
    }

    const getValue = () => {
        //const showchart = ReactDOM.createRoot(document.getElementById("ShowXM"));
        var Xl = document.getElementById("xl").value;
        var Xr = document.getElementById("xr").value;
        var Function = document.getElementById("Function").value;
        var Xm = BisectionFn(Xl,Xr,Function);
        document.getElementById("ShowXM").innerHTML = Xm;
        // showchart.render(
        //     <div className="chartcontrainer">
        //         <div className = 'chart'>
        //             <Chart data = {{xm:XMA, xl:XLA , xr:XRA ,loop:LOOP}}/>
        //         </div>
        //     </div>
        // );
    }
    return(
        <div>
            <br/>
            <h1 className="headerName">Bisection</h1>
            <br/>
            <div className="bodyComponent">
                <form>
                    <div>
                        <label>
                            <h4>XL :</h4>
                        </label>
                        <input className="NumberFill" id = "xl" placeholder = "XL" type = 'number'></input>
                        <label>    
                            <h4>XR :</h4>
                        </label>
                        <input className="NumberFill" id = "xr" placeholder = "XR" type = 'number'></input>
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
                <div id = "showchart">
                    <Chart data = {{xm:XMA, xl:XLA , xr:XRA ,loop:LOOP}}/>
                </div>
            </div>
        </div>
    );
}

export default Bisection;