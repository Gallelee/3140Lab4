import { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination, TableFooter, Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import useAxios from "./hooks/useAxios";
import axios from "axios";


export default function ViewAll() {
    //const data = useAxios("http://127.0.0.1:5001/cisc3140quiz4/us-central1/app/api/getAll") //custom hook that takes a url and does a get request. Code for the hook is in the hook folder

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

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDeletePress = async (event) => {
        const id = event.target.parentNode.parentNode.firstChild.innerHTML
        const response = await axios.delete(`http://127.0.0.1:5001/cisc3140quiz4/us-central1/app/api/delete/${id}`)
        console.log(response.data)

    }
    return (
        <MainContainer>
            <Typography variant="h4" align="center" style={{ marginTop: "5%" }}> All Squirrel Sightings</Typography>
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
                        {data ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(elm => {
                            return (
                                <TableRow>
                                    <TableCell>{elm.id}</TableCell>
                                    <TableCell>{elm.squirrel_id}</TableCell>
                                    <TableCell>{elm.color}</TableCell>
                                    <TableCell>{elm.activity}</TableCell>
                                    <TableCell>{elm.behavior}</TableCell>
                                    <TableCell>{elm.highlight_color}</TableCell>
                                    <TableCell ><IconButton onClick={handleDeletePress} sx={{ color: "red" }} >Delete</IconButton></TableCell>
                                </TableRow>
                            )
                        }) : ""}
                    </TableBody>

                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 15, 25]}
                    component="div"
                    count={data ? data.length : 0}
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