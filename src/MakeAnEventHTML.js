import useStyles from "./styles"
import { Button, Grid, Typography, } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia} from '@mui/material';

const MakeAnEventHTML = (props) => {
    
    const {classes} = useStyles();

    const element = props.element

    const displayEvent = ()=>{window.location = "http://localhost:3000/"+element.key}

    return(
    
        <Grid item xs={12} sm={6} md={4} lg={6}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image Title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.cardInfo}>
                            <b>{element.place}</b> / {element.date}
                        </Typography>
                        <Typography gutterBottom variant="h5">
                            {element.title}   
                        </Typography>
                        <Typography className={classes.cardInfo}>
                            {element.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={()=>{displayEvent()}}>Wyświetl</Button>
                        <Button size="small" color="primary">Edytuj</Button>
                        <Button size="small" color="primary" onClick={()=>{
                                localStorage.removeItem("Event_"+element.key)
                                props.updateEvent()
                                }}>Usuń</Button>
                    </CardActions>
                </Card>
            </Grid>
    )
}

export default MakeAnEventHTML