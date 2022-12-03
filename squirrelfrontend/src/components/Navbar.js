import styled from "styled-components"
import React from "react"
import {AppBar} from "@mui/material"
import {Button} from "@mui/material"
import {Tabs} from "@mui/material"
import {Tab} from "@mui/material"
import { useState } from "react"


export default function Navbar(){
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <TabContainer>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Home" />
            <Tab label="View All" />
            <Tab label="Find By ID"/>
            <Tab label="New Entry" />
          </Tabs>
        </TabContainer>
    )
    
}

const TabContainer = styled.div`
    position: fixed;
    width: 100%;
    
    height: 5%;
`






