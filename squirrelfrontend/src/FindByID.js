import { useState } from "react";
import styled from "styled-components";
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination, TableFooter,Paper, Typography, TextField, IconButton } from "@mui/material";
import useFetch from "./hooks/useFetch";
import SearchIcon from '@mui/icons-material/Search';

export default function FindByID(){
    const data = useFetch("http://127.0.0.1:5001/cisc3140quiz4/us-central1/app/api/getAll")

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [inputID, setInputID] = useState(-1)
    const [squirrelData, setSquirrelData] = useState([])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
    const handleSearchPress = async (event) => {
        setSquirrelData([])
        for(let x of data){
            if(x.squirrel_id == inputID){
                setSquirrelData((prev) => [...prev, x])
            }
        }
        console.log(inputID)
        console.log(squirrelData)
    }

    const handleInputChange = (event) => {
        setInputID(event.target.value)
    }
    return(
        <MainContainer>
            <Typography variant="h4" align="center" style={{marginTop: "5%"} }> Find By Squirrel ID</Typography>
            <SearchBox>
            <TextField onChange={handleInputChange}/>
            <IconButton onClick={handleSearchPress}>
                <SearchIcon/>
            </IconButton>
            </SearchBox>
            
        <TableContainer>
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
                             return(<TableRow>
                                    <TableCell>{elm.id}</TableCell>
                                    <TableCell>{elm.squirrel_id}</TableCell>
                                    <TableCell>{elm.color}</TableCell>
                                    <TableCell>{elm.activity}</TableCell>
                                    <TableCell>{elm.behavior}</TableCell>
                                    <TableCell>{elm.highlight_color}</TableCell>
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