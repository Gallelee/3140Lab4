import React from "react";
import styled from "styled-components";
import { styled as styled2 } from '@mui/system';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from "@mui/material";


export default function NewEntry(){
    const[id, setId] = React.useState('');
    const[color, setColor] = React.useState('black');
    const[secondary, setSecondary] = React.useState('');
    const[activity, setActivity] = React.useState('');
    const[behavior, setBehavior] = React.useState('');
    //const[error, setError] = React.useState(true);

    const handleTextChange = (event) => {
        setId(event.target.value);
    }

    const handleColorChange = (event) => {
        setColor(event.target.value);
        //setError(false);
    }
    
    const handleActivityChange = (event) => {
        setActivity(event.target.value);
    }

    const handleBehaviorChange = (event) => {
        setBehavior(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log("Submitted");
        
    }

    return(
        // The padding should be adjusted when the nav bar is added in 
        <div style={{backgroundColor:'#F1F1F1', paddingTop:60, paddingBottom:40}} >

            <Typography variant="h4" sx={{textAlign:'center'}}>New Squirrel Sighting</Typography>

            <Paper elevation={3} sx={{m:10, px:10, py:5}}>
                <Typography variant="h6" >Enter Squirrel Information </Typography>
                <br />

                <form onSubmit={handleSubmit}>
                    <FormControl sx={{width:'100%'}}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                            
                                <TextField
                                    required
                                    id="sqId"
                                    label="Squirrel ID"
                                    defaultValue="" 
                                    value={id}
                                    onChange={handleTextChange}
                                    sx={{width:200, mb: 4}}
                                />

                                <br/>

                                <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
                            
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    value={color}
                                    onChange={handleColorChange}
                                >
                                    <FormControlLabel value="black" control={<Radio />} label="Black" />
                                    <FormControlLabel value="gray" control={<Radio />} label="Gray" />
                                    <FormControlLabel value="cinnamon" control={<Radio />} label="Cinnamon" />

                                </RadioGroup>

                                <br/> <br/>

                                <FormLabel id="demo-radio-buttons-group-label">Secondary Color</FormLabel>
                            
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="sblack" control={<Radio />} label="Black" />
                                    <FormControlLabel value="sgray" control={<Radio />} label="Gray" />
                                    <FormControlLabel value="scinnamon" control={<Radio />} label="Cinnamon" />

                                </RadioGroup>

                            </Grid>
                            <Grid xs={6}>
                                <FormLabel id="demo-radio-buttons-group-label">Activity</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    value={activity}
                                    onChange={handleActivityChange}
                                >
                                    <FormControlLabel value="run" control={<Radio />} label="Running" />
                                    <FormControlLabel value="chase" control={<Radio />} label="Chasing" />
                                    <FormControlLabel value="climb" control={<Radio />} label="Climbing" />
                                    <FormControlLabel value="eat" control={<Radio />} label="Eating" />
                                </RadioGroup>
                                
                                <br/>

                                <FormLabel id="demo-radio-buttons-group-label">Behavior</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    value={behavior}
                                    onChange={handleBehaviorChange}
                                >
                                    <FormControlLabel value="kuks" control={<Radio />} label="Kuks" />
                                    <FormControlLabel value="quaas" control={<Radio />} label="Quaas" />
                                    <FormControlLabel value="moans" control={<Radio />} label="Moans" />
                                    <FormControlLabel value="tflags" control={<Radio />} label="Tail Flags" />
                                    <FormControlLabel value="ttwitch" control={<Radio />} label="Tail Twitches" />
                                </RadioGroup>

                            </Grid>
                            
                            <Grid xs={6} ></Grid>
                            <Grid xs={2}>
                                <Button variant="contained" sx={{marginTop:2}} type="submit" >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </FormControl>
                </form>

            </Paper>

        </div>
    )
};

