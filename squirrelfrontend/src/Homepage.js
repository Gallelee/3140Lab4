import React from "react";
import squirrelbg from './assets/RedSquirrelbg.jpeg';
import styled from "styled-components";
import { styled as styled2 } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

export default function Homepage() {

    return (
        <BgDiv>
            <HomeGrid container spacing={2}>
                <Grid xs={6}>
                    <HomePaper elevation={3}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}> Squirrels on Campus</Typography>
                        <br />

                        <Typography variant="body1" sx={{ px: '25px' }}>
                            Brooklyn College has collected dat on the squirrel population on its campus. Trackers have noted squirrel primary and secondary colors, activities, and behaviors.
                        </Typography>
                        <br />

                        <Typography variant="body1" sx={{ px: '25px' }}>
                            Use this app to track squirrel sighting at CUNY Brooklyn College's campus. Students are invited to view previously recorded observational data or add their own entries.
                        </Typography>

                        <Stack direction="column" alignItems="center" spacing={2} sx={{ mt: 4 }}>
                            <Button variant="contained" LinkComponent={Link} to="./ViewAll">View All</Button>
                            <Button variant="contained" LinkComponent={Link} to="./FindById">Find By ID</Button>
                            <Button variant="contained" LinkComponent={Link} to="./NewEntry">New Entry</Button>
                        </Stack>

                    </HomePaper>
                </Grid>
                <Grid xs={6}></Grid>
            </HomeGrid>
        </BgDiv>
    );
}

const BgDiv = styled.div`
    background-image: url(${squirrelbg});
    width: 100vw;
    height: 100vh;
    background-size: cover;
    
`

const HomeGrid = styled2(Grid)({
    paddingTop: '15%',
    paddingLeft: 40
});

const HomePaper = styled2(Paper)({
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 35
});