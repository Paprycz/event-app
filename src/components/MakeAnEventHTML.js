import useStylesEventCards from "../styles/stylesEventCards"
import { Button, Grid, Typography, } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia} from '@mui/material';
import { Link } from "react-router-dom";

import { storage } from "../firebase";
import { deleteObject, ref } from "firebase/storage";

import { useState } from "react";
import getImage from "../eventManagement/getImage";

const MakeAnEventHTML = (props) => {
    
    const {classes} = useStylesEventCards();

    const element = props.element
    const [sourceImage, setSourceImage] = useState("null")
    async function setImage()  {
        const image = await getImage(element.image)
        setSourceImage(image)
    }
    setImage()

    return(
    
        <Grid item xs={12} sm={6} md={4} lg={6}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.image}
                    image={sourceImage}
                    title="Image Title"
                />
                
                <CardContent className={classes.content}>
                    <Typography className={classes.timeAndPlace}>
                        <b>{element.place}</b> / {element.date}
                    </Typography>
                    
                    <Typography gutterBottom variant="h5">
                        {element.title}   
                    </Typography>
                    
                    <Typography className={classes.description}>
                        {element.description}
                    </Typography>
                </CardContent>
                
                <CardActions>
                    <Link style={{textDecoration: 'none'}} to={"/Event_"+element.key}>
                        <Button size="small" color="primary">
                            Wyświetl
                        </Button>
                    </Link>
                    
                    <Button size="small" color="primary">Edytuj</Button>
                    
                    <Button size="small" color="primary" onClick={()=>{
                            deleteObject(ref(storage, `images/${element.image}`))
                            localStorage.removeItem("Event_"+element.key)
                            props.updateEvent()
                            }}>Usuń</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default MakeAnEventHTML
