import useStyles from "../styles"
import { Container, Typography } from "@mui/material"

const DisplayEvent = (props) => {
    const {classes} = useStyles(props)
    const eventObject = JSON.parse(props.eventObject)
    console.log(eventObject)
    console.log(eventObject.title)
    return(
        <>
            <div className={classes.container}>
                <Container maxWidth="sm" className={classes.titleContent}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        {eventObject.title}
                    </Typography>
                    <Typography variant="h5" align="center" color ="textSecondary" paragraph>
                        {eventObject.type}
                    </Typography>
                </Container>
            </div>
            <div className={classes.eventContent}>
                <img className={classes.eventImage} src='https://source.unsplash.com/random' />
                <div className={classes.textContent}>
                    <div className={classes.eventInfoContent}>
                        <Typography variant="h4">{eventObject.date}</Typography> 
                        <Typography variant="h4">{eventObject.time}</Typography> 
                        <Typography variant="h4">{eventObject.place}</Typography> 
                    </div>
                    <Typography className={classes.descriptionContent} variant="h6">
                        {eventObject.description}
                    </Typography>
                    <div className={classes.contactContent}>
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