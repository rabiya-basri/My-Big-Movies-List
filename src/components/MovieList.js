import { Grid,Box, Typography } from '@material-ui/core'
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
    const { movies,result,search} = props

    return (
        <>
            {movies.length===0 && <Typography gutterBottom variant='h6' component='p'>No movies added, Add movie..🎦</Typography>}
        <Box  p={4}>
            <Grid container spacing={2}>
                    {search ? (
                        result.map((movie) => {
                            return ( 
                                <MovieCard key={movie.id}
                                    id={movie.id}
                                    name={movie.name}
                                    ranking={movie.ranking}
                                    image={ movie.image}
                                />   
                            )
                        })
                    ) : (
                        movies.map((movie) => {
                            return ( 
                                <MovieCard key={movie.id}
                                    id={movie.id}
                                    name={movie.name}
                                    ranking={movie.ranking}
                                    image={ movie.image}
                                />   
                            )
                        })         
                    )}                
            
                </Grid>
            </Box>      
         </>
        
    )
}
export default MovieList