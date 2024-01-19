import React from "react";
import {  Grid } from "@mui/material";
import H1 from "./H1";
import styled from "styled-components";
import Social from "./Social";
import Button from "./Button";

export default function Me_Section() {
  return (
    <>
      <Styledintro>
        <Grid Container>
          <Grid item>
            <div className="Intro">
              <h3>Hello,its Me </h3>
              <H1 text="Mohammed Jouhar" />
              <h3>And i'am a Full Stack Web Developer </h3>
              <p>
                "Passionate MERN stack enthusiast dedicated to creating seamless
                and engaging web experiences. Proficient in building robust
                applications that blend functionality with elegant design."
              </p>
            </div>
          </Grid>
          <Grid item>
            <Social></Social>
            <br />
            <Button
              text={"Download CV"}
              handleclick={() => alert("mair")}
            ></Button>
          </Grid>
        </Grid>
      </Styledintro>
    </>
  );
}

const Styledintro = styled.div`
  .Intro {
    color: white;
    margin-top: 100px;
    /* margin-bottom: 100px; */
  }

  
`;
