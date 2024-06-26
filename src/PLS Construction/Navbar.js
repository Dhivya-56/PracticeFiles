import React from "react";
import { AppBar, Box, Container, Tab, Toolbar, Typography } from "@mui/material";
import Contentbar from "./Contentbar";
import Services from "./Services";
import { Routes,Route,Link } from "react-router-dom";
import { scroller } from "react-scroll";
import Contact from "./Contact";

const Navbar = () => {
  const NavTitle = [
    { id: 1, Role: "Services" },
    { id: 2, Role: "Pricing" },
    { id: 3, Role: "About" },
    { id: 4, Role: "Contact" },
  ];
  function handleNav(id) {
    if (id === 1) {
      scroller.scrollTo("serve", {
        smooth: true,
        offset: -70, 
      });
    }
    else if(id===4){
      scroller.scrollTo("contact", {
        smooth: true,
        offset: -70, 
      });
    }
  }
  return (
    <Box>
      <AppBar sx={{ position: "sticky", top: 0, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar
            variant="regular"
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Box
              component="img"
              src="Logopls.png"
              sx={{ width: 70, height: 70 }}
            />

            <Typography variant="h5" sx={{ color: "#9368e8", fontWeight: 600 }}>
              PLS CONSTRUCTIONS
            </Typography>
            {NavTitle.map((item) => {
              return (
                <Typography
                  variant="h6"
                  sx={{ color: "#757575" ,fontSize:15,fontWeight:500}}
                  onClick={() => handleNav(item.id)}
                  // label= {item.Role}
                >
                 {item.Role}
                </Typography>
              );
            })}
          </Toolbar>
        </Container>
      </AppBar>
      <Contentbar />
      <Box className="serve" id="serve">
        <Services />
      </Box>
      <Box className="contact" id="contact">
      <Contact/>
      </Box>
    </Box>

  );
};

export default Navbar;
