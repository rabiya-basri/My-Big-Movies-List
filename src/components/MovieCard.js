import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../actions/moviesAction'

const useStyles = makeStyles({
    card: {
        maxHeight:350,
        maxWidth: 350,
        margin: '0.5rem',
    },
    media: {
        width:150,
        height: 200,
        borderRadius:'0.3rem',
    }
})

const MovieCard = (props) => {
    const classes = useStyles()
    
    const dispatch = useDispatch()
    
    const { id,name, ranking,image } = props
    
    const handelRemove = (id) => {
        dispatch(removeMovie(id))
    }
    //console.log(image)

    return (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={image} title={ name}/>
                        <CardContent>
                        <Typography gutterBottom variant='h6' component='p'>
                           { name}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                          Rating: {ranking}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size='small' color='secondary' onClick={() => {
                            handelRemove(id)
                        }}>Remove</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </>
    )
}
export default MovieCard