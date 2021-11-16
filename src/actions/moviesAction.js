import axios from 'axios'

export const addMovie = (formData) => {
    return {
        type: 'ADD_MOVIE',
        payload:formData
    }
}

export const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        payload:id
    }
}

export const ascSort = (event) => {
    return {
        type: 'ASCENDING',
        payload:event
    }
}

export const startGetmovieImage = (formData) => {
    return (dispatch) => {
        axios.get(`https://www.omdbapi.com/?s=${formData.name}&apikey=8a28e647`)
            .then((response) => {
                const movies = response.data
                //console.log(movies.Search[0].Poster)
                dispatch(addMovie({...formData,image:movies.Search[0].Poster}))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}
