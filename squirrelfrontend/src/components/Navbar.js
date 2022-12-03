import styled from "styled-components"
import React from "react"
import {AppBar} from "@mui/material"
import {Button} from "@mui/material"
import {Tabs} from "@mui/material"
import {Tab} from "@mui/material"
import { useState } from "react"
import {Link} from "react-router-dom"


export default function Navbar(){
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <TabContainer>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Home" LinkComponent={Link} to="/"/>
            <Tab label="View All" LinkComponent={Link} to="./ViewAll"/>
            <Tab label="Find By ID" LinkComponent={Link} to="./FindByID"/>
            <Tab label="New Entry" />
          </Tabs>
        </TabContainer>
    )
    
}

const TabContainer = styled.div`
    position: relative;
    width: 100%;
    
    height: 5%;
`






