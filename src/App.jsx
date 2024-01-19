import { Box, Container, Grid, } from "@mui/material";
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Jomon from "./Assets/Images/jomon.png";
import Me_Section from "./Components/Me_Section";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Container fixed>
        <Grid Container>
          <Grid item xs={12} sm={12} md={12} lg={12} >
            <Navbar></Navbar>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Me_Section></Me_Section>
              
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="Photo">
                <img src={Jomon} alt="" />
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
          <Grid item xs={12}>
            <About></About>
          </Grid>

          <Grid item xs={12}>
            <Skills></Skills>
          </Grid>

          <Grid item xs={12}>
            <Portfolio></Portfolio>
          </Grid>

          <Grid item xs={12}>
            <Contact></Contact>
          </Grid>
          <Grid item xs={12}>
           <Footer></Footer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
