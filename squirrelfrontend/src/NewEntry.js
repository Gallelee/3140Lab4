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
import axios from 'axios';


export default function NewEntry(){
    const[id, setId] = React.useState('');
    const[sqColor, setSqColor] = React.useState('black');
    const[secondary, setSecondary] = React.useState('black');
    const[act, setAct] = React.useState('running');
    const[behav, setBehav] = React.useState('kuks');
    //const[error, setError] = React.useState(true);

    const handleTextChange = (event) => {
        setId(event.target.value);
    }

    const handleSqColorChange = (event) => {
        setSqColor(event.target.value);
        //setError(false);
    }

    const handleSecondaryChange = (event) => {
        setSecondary(event.target.value);
    }
     
    const handleActChange = (event) => {
        setAct(event.target.value);
    }

    const handleBehavChange = (event) => {
        setBehav(event.target.value);
    }

    const handleSubmit = (event) => {
        //console.log("Submitted");
        event.preventDefault();

        const data = {
            squirrel_id: id,
            color: sqColor,
            highlight_color: secondary,
            activity: act,
            behavior: behav,
            campus_id: '1'
        }
        console.log(JSON.stringify(data));

        axios.post(`http://127.0.0.1:5001/cisc3140quiz4/us-central1/app/api/create`, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
               console.log(error.response.data);
            })

            
        //console.log(data);
        
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
                                    value={sqColor}
                                    onChange={handleSqColorChange}
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
                                    value={secondary}
                                    onChange={handleSecondaryChange}
                                >
                                    <FormControlLabel value="black" control={<Radio />} label="Black" />
                                    <FormControlLabel value="gray" control={<Radio />} label="Gray" />
                                    <FormControlLabel value="cinnamon" control={<Radio />} label="Cinnamon" />

                                </RadioGroup>

                            </Grid>
                            <Grid xs={6}>
                                <FormLabel id="demo-radio-buttons-group-label">Activity</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    value={act}
                                    onChange={handleActChange}
                                >
                                    <FormControlLabel value="running" control={<Radio />} label="Running" />
                                    <FormControlLabel value="chasing" control={<Radio />} label="Chasing" />
                                    <FormControlLabel value="climbing" control={<Radio />} label="Climbing" />
                                    <FormControlLabel value="eating" control={<Radio />} label="Eating" />
                                </RadioGroup>
                                
                                <br/>

                                <FormLabel id="demo-radio-buttons-group-label">Behavior</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    value={behav}
                                    onChange={handleBehavChange}
                                >
                                    <FormControlLabel value="kuks" control={<Radio />} label="Kuks" />
                                    <FormControlLabel value="quaas" control={<Radio />} label="Quaas" />
                                    <FormControlLabel value="moans" control={<Radio />} label="Moans" />
                                    <FormControlLabel value="tailFlags" control={<Radio />} label="Tail Flags" />
                                    <FormControlLabel value="tailTwitches" control={<Radio />} label="Tail Twitches" />
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

