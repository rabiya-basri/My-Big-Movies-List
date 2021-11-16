import React from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {
    const movies = useSelector((state) => {
        return state.movies
    })

    //calculate top Ranked movie
    const topRanking = movies.sort((a, b) => {
        return a.ranking-b.ranking
    })
  //console.log(topRanking)
    
    return (
        <div>
            <h2>Movie Stats</h2>
            {movies.length === 0 ? <p>No top movie to show</p> : (
                <>
                    <p>Total Movies - {movies.length}</p>
                    <h4>#Top Ranked Movies</h4>
                    <h4>{topRanking[0].name}</h4>
                </>
            )}
            
        </div>
    )
}
export default MovieStats