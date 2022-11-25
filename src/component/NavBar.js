import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
      return (
        <Navbar className="NaviBar" bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand className="NavLogo" href="/">Numerical Calculator</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '150px' }}
                navbarScroll
              >
                <NavDropdown title="Root of Equation" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
                  <NavDropdown.Item href="/FalsePosition">False Position</NavDropdown.Item>
                  <NavDropdown.Item href="/OnePoint">One-Point Iteration</NavDropdown.Item>
                  <NavDropdown.Item href="/NewtonRaphson">Newton-Raphson</NavDropdown.Item>
                  <NavDropdown.Item href="/Secent">Secent</NavDropdown.Item>
                  <NavDropdown.Item href="/TestSkill">Quiz</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Linear Algebra" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/CramerRule">CramerRule</NavDropdown.Item>
                  <NavDropdown.Item href="/GaussElimination">Gauss Elimination</NavDropdown.Item>
                  <NavDropdown.Item href="/Gauss-Jordan">Gauss-Jordan</NavDropdown.Item>
                  <NavDropdown.Item href="/MatrixInversion">Matrix Inversion</NavDropdown.Item>
                  <NavDropdown.Item href="/LUDecomposition">LU Decomposition</NavDropdown.Item>
                  <NavDropdown.Item href="/CholeskyDecomposition">Cholesky Decomposition</NavDropdown.Item>
                  <NavDropdown.Item href="/JacobiIteration">Jacobi Iteration</NavDropdown.Item>
                  <NavDropdown.Item href="/GaussSeidel">Gauss-Seidel Iteration</NavDropdown.Item>
                  <NavDropdown.Item href="/ConjugateGradiant">Conjugate Gradiant</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavigationBar;