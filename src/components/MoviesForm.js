import React,{useState} from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from 'react-redux'
import { startGetmovieImage }  from "../actions/moviesAction"

const MoviesForm = (props) => {
    const dispatch = useDispatch()
    
    const [name,setName] = useState('')
    const [ranking, setRanking] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    
    const handelInput = (e) => {
        const attr = e.target.name
        if (attr === 'movie') {
         setName(e.target.value)
        } else if (attr === 'ranking') {
            setRanking(e.target.value)
     }  
    }

    //form validation
    const runvalidation = () => {
        if (name.trim().length === 0) {
            errors.name='movie name cannot be blank'
        } else if (ranking.trim().length === 0) {
            errors.ranking='Ranking cannot be blank'
        }
    }

    
    const handelSubmit = (e) => {
        e.preventDefault()
        runvalidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                id: Number(new Date()),
                name: name,
                ranking:ranking
            }
            //console.log(formData)  
            dispatch(startGetmovieImage(formData))
            setName('')
            setRanking('')
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <>
            <h2>Add Movie</h2>
            <form onSubmit={handelSubmit}>
                <TextField 
                    type='text' value={name}
                    name='movie'
                    onChange={handelInput}
                    placeholder='Enter Movie Name'
                /><br />
                {formErrors.name && <span style={{color:'red'}}>{formErrors.name}</span>}<br />
                
                <TextField 
                    type='text' value={ranking}
                    name='ranking'
                    onChange={handelInput}
                    placeholder='IMDB Ranking' /><br />
                {formErrors.ranking && <span style={{color:'red'}}>{formErrors.ranking}</span>}<br />
                
                <Button variant='contained' size='small' color='secondary' type='submit'>Add</Button>
            </form>   
        </>
    )
}

export default MoviesForm
