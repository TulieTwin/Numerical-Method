import * as React from 'react';
//Header & Footer
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
//page
import Home from "./component/Home";
import Bisection from "./method/RootOfEquation/Bisection";
import FalsePosition from "./method/RootOfEquation/FalsePosition";
import OnePoint from "./method/RootOfEquation/OnePoint";
import NewtonRaphson from "./method/RootOfEquation/NewtonRaph";
import Secent from "./method/RootOfEquation/Secent";
import CramerRule from "./method/LinearAlgebra/CramerRule";
import GaussElimination from "./method/LinearAlgebra/GaussElimination";
import GaussJordan from "./method/LinearAlgebra/GaussJordan";
import MatrixInversion from "./method/LinearAlgebra/MatrixInversion";
import LUDecomposition from "./method/LinearAlgebra/LUDecomposition";
import CholeskyDecomposition from "./method/LinearAlgebra/CholeskyDecomposition";
import JacobiIteration from "./method/LinearAlgebra/JacobiIteration";
import GaussSeidel from "./method/LinearAlgebra/GaussSeidel";
import ConjugateGradiant from "./method/LinearAlgebra/ConjugateGradiant";
import ComingSoon from "./component/ComingSoon";
import TestSkill from "./method/RootOfEquation/TestSkill";
//component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//css
import "./App.css";

const App = () => {
  return (
    <div className = "App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path ='/' element = {<Home />}/>
          <Route path ='/Bisection' element = {<Bisection />}></Route>
          <Route path ='/Falseposition' element = {<FalsePosition />}></Route>
          <Route path ='/OnePoint' element = {<OnePoint />}></Route>
          <Route path ='/NewtonRaphson' element = {<ComingSoon />}></Route>
          <Route path ='/Secent' element = {<ComingSoon />}></Route>
          <Route path ='/CramerRule' element = {<ComingSoon />}></Route>
          <Route path ='/GaussElimination' element = {<ComingSoon />}></Route>
          <Route path ='/GaussJordan' element = {<ComingSoon />}></Route>
          <Route path ='/MatrixInversion' element = {<ComingSoon />}></Route>
          <Route path ='/LUDecomposition' element = {<ComingSoon />}></Route>
          <Route path ='/CholeskyDecomposition' element = {<ComingSoon />}></Route>
          <Route path ='/JacobiIteration' element = {<ComingSoon />}></Route>
          <Route path ='/GaussSeidel' element = {<ComingSoon />}></Route>
          <Route path ='/ConjugateGradiant' element = {<ComingSoon />}></Route>
          <Route path ='/TestSkill' element = {<TestSkill />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
