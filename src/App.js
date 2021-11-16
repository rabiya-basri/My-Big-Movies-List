import React from 'react'
import "./App.css";
import MoviesContainer from './components/MoviesContainer'
import { Container } from '@material-ui/core'

const App = (props) => {
    return (
        <Container>
            <MoviesContainer/>
        </Container>      
    )
}
export default App