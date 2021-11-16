import React, { useState } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { ascSort } from "../actions/moviesAction";
import { Divider,makeStyles,Select, MenuItem, TextField, Toolbar, Typography, FormControl, InputLabel, Grid, Paper } from '@material-ui/core'
import MovieList from "./MovieList";
import MoviesForm from "./MoviesForm";
import MovieStats from "./MovieStats";

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: '#1F2937',
        color:'#F3F4F6',
    },
    title: {
        flexGrow: 1,
    },
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
    }
  }));

const MoviesContainer = (props) => {
    const classes = useStyles();
    
    const dispatch=useDispatch()
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('')
    const [result, setResult] = useState([])
    
    const movies = useSelector((state) => {
        return state.movies
    })

    const handelSelect = (e) => {
        console.log(e.target.value)
        setSelect(e.target.value)
        dispatch(ascSort(e.target.value))
    }

    const handelSearch = (e) => {
        const inputTxt = e.target.value
        setSearch(inputTxt)
        const result= movies.filter((movie) => {
            return movie.name.toLowerCase().includes(inputTxt.toLowerCase())
        })
        console.log(result)
        setResult(result)
    return result
       
    }

   

    return(
        <>     
            <>
                <Toolbar className={classes.nav}>
                    <Typography variant='h4' className={classes.title}>My Big Movies List</Typography>  
                    <TextField variant='outlined' type='text' value={search} onChange={handelSearch}
                        style={{ marginRight: '1rem', backgroundColor: 'white', borderRadius: '0.2rem' }}
                        placeholder='Search By Name...'
                    />

                    <FormControl variant="outlined" sx={{ m: 1}} style={{ width: '15%',backgroundColor:'white',borderRadius:'0.2rem'}}>
                        <InputLabel>order By Ranking</InputLabel>
                        <Select value={select} onChange={handelSelect} >
                        <MenuItem value='top'>Top</MenuItem>
                        <MenuItem value='low'>Low</MenuItem>
                    </Select>
                    </FormControl>
                </Toolbar>  
                <Divider/>      
            </>
            
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <MovieList movies={movies} result={result} search={ search} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <MoviesForm />
                    </Paper>
                <Grid item xs={12} style={{marginTop:'1rem'}}>
                 <Paper className={classes.paper}>
                    <MovieStats />
                    </Paper>
                </Grid>
                </Grid>
            </Grid>    
        </>
    )
}
export default MoviesContainer