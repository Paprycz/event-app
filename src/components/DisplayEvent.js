import useStylesDisplayEvent from "../styles/stylesDisplayEvent"
import { Container, Typography } from "@mui/material"

import { storage } from '../firebase'
import { getDownloadURL, ref } from "firebase/storage"
import { useState } from "react"

const DisplayEvent = (props) => {
    const {classes} = useStylesDisplayEvent()
    const eventObject = JSON.parse(props.eventObject)
    const [sourceImage, setSourceImage] = useState("https://source.unsplash.com/random")
    async function getImage() {
    if(eventObject.image !== null) {
        console.log(eventObject.image)
        const imageURL = await getDownloadURL(ref(storage, `images/${eventObject.image}`))
        setSourceImage(imageURL)
    }}
    getImage()
    return(
        <>
            <div className={classes.container}>
                <Container maxWidth="sm" className={classes.title}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        {eventObject.title}
                    </Typography>
                    
                    <Typography variant="h5" align="center" color ="textSecondary" paragraph>
                        {eventObject.type}
                    </Typography>
                </Container>
            </div>
            
            <div className={classes.event}>
                <img className={classes.eventImage} src={sourceImage} />
                
                <div className={classes.eventTextContent}>
                    <div className={classes.timeAndPlace}>
                        <Typography variant="h4">{eventObject.date}</Typography> 
                        
                        <Typography variant="h4">{eventObject.time}</Typography> 
                        
                        <Typography variant="h4">{eventObject.place}</Typography> 
                    </div>
                    
                    <Typography className={classes.description} variant="h6">
                        {eventObject.description}
                    </Typography>
                    
                    <div className={classes.contact}>
                        <Typography variant="h5"><b>Kontakt:</b> </Typography>
                        
                        <Typography variant="h6">{eventObject.phone}</Typography>
                        
                        <Typography variant="h6">{eventObject.email}</Typography>
                    </div>
                </div>
            </div>
        </>
        
    )
}
export default DisplayEvent