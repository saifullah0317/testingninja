import React from "react";
import { Box, Card, CardContent, Grid, styled, Typography, Slide } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../images/t2.jpg";
import imgDetail2 from "../images/t3.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Slide direction="right" in={true} timeout={500}>
          <Card>
            <CardContent>
              <Title
                text={"We make it easy for Corporates and Educational Sectors"}
                textAlign={"start"}
              />
              <CustomTypography>
                Generative testing is aiding both corporate and educational
                institutions by automating the generation of test cases and data. In
                corporate settings, it accelerates software testing processes,
                improving product quality and reducing time-to-market. In
                educational institutes, it facilitates the creation of diverse and
                challenging assessments, enhancing the learning experience and
                assessment accuracy.
                <br />
                <br />.
              </CustomTypography>
            </CardContent>
          </Card>
        </Slide>
      </CustomGridItem>

      <Slide direction="up" in={true} timeout={500}>
        <Grid item xs={12} sm={4} md={6}>
          <img
            src={imgDetail}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Grid>
      </Slide>

      <Slide direction="up" in={true} timeout={500}>
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            order: { xs: 4, sm: 4, md: 3 },
          }}
        >
          <img
            src={imgDetail2}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Grid>
      </Slide>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Slide direction="right" in={true} timeout={500}>
          <Card>
            <CardContent>
              <Title
                text={"Match with the best testing agency"}
                textAlign={"start"}
              />
              <CustomTypography>
                Our verified partner Recruitment Agents who
                <br />
                earn an average of 4.8/5 stars from companies and institutes.
              </CustomTypography>
            </CardContent>
          </Card>
        </Slide>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
