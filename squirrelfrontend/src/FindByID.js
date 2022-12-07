import { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination, TableFooter, Paper, Typography, TextField, IconButton, Button } from "@mui/material";
import useAxios from "./hooks/useAxios";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
export default function FindByID() {
    //const data = useAxios("http://127.0.0.1:5001/cisc3140quiz4/us-central1/app/api/getAll")

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [inputID, setInputID] = useState(-1)
    const [squirrelData, setSquirrelData] = useState([])

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const sqData = await axios.get('http://127.0.0.1:5001/cisc3140quiz4/us-central1/app/api/getAll');
            console.log(sqData.data);
            console.log(Array.isArray(sqData.data))
            if(Array.isArray(sqData.data)){
                setData(sqData.data)
                console.log("is array")
            }
            else{
                setData(sqData.data.data)
            }
            
        }

        getData();
    }, [])


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearchPress = async (event) => {
        setSquirrelData([])
        let tempData = []
        for(let x of data){
            if(x.squirrel_id == inputID){
                tempData.push(x)
            }
        }
        setSquirrelData(tempData)
    }

    const handleInputChange = (event) => {
        setInputID(event.target.value)
    }

    const handleDeletePress = async (event) => {
        const id = event.target.parentNode.parentNode.firstChild.innerHTML
        const response = await axios.delete(`http://127.0.0.1:5001/cisc3140quiz4/us-central1/app/api/delete/${id}`)
        console.log(response.data)
    }
    return (
        <MainContainer>
            <Typography variant="h4" align="center" style={{ marginTop: "5%" }}> Find By Squirrel ID</Typography>


            <TableContainer>
                <SearchBox>
                    <TextField onChange={handleInputChange} variant="standard" helperText="Enter Squirrel ID" sx={{ marginRight: "10px" }} />
                    <Button variant="contained" onClick={handleSearchPress}>Search</Button>
                </SearchBox>
                <Table component={Paper} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Sighting ID</TableCell>
                            <TableCell>Squirrel ID</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Activity</TableCell>
                            <TableCell>Behavior</TableCell>
                            <TableCell>Highlight Color</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {squirrelData? squirrelData.slice(page * rowsPerPage, page*rowsPerPage+rowsPerPage).map(elm => {
                             return(<TableRow key={elm.id}>
                                    <TableCell>{elm.id}</TableCell>
                                    <TableCell>{elm.squirrel_id}</TableCell>
                                    <TableCell>{elm.color}</TableCell>
                                    <TableCell>{elm.activity}</TableCell>
                                    <TableCell>{elm.behavior}</TableCell>
                                    <TableCell>{elm.highlight_color}</TableCell>
                                    <TableCell ><IconButton onClick={handleDeletePress} sx={{color: "red"}}>Delete</IconButton></TableCell>
                                </TableRow>)
                               
                        }): ""}
                    </TableBody>

                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 15, 25]}
                    component="div"
                    count={squirrelData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </TableContainer>
        </MainContainer>
    )
}

const TableContainer = styled.div`
   position: relative;
   width: 70%;
   height: 70%;
   margin: 5% auto
    
`

const MainContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #F9FAFB;
`


const SearchBox = styled.div`
    width: fit-content;
    margin: 0 auto;
`