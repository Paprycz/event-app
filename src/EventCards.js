import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Card, CardActions} from '@mui/material';


import useStyles from './styles'
import TitleContent from './TitleContent';
import MakeAnEventHTML from './MakeAnEventHTML';
import DialogWindow from './DialogWindow';

const EventCards = (props) => {


 //STYLES HANDLER (CSS - MUI)
     const {classes} = useStyles();

//Dialog opening/closing state
    const [openDialog,setOpenDialog] = useState(false)

//UpdatingEventsState

    return (
        <div>   
            <main>
                <TitleContent key="TitleContent" />
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {props.events.map((element,at) => <MakeAnEventHTML key={"EventHTML"+at} element={JSON.parse(element)} updateEvent={()=>{props.handleUpdateEvents()}} />)}
                            <Grid item key='createEvent' xs={12} sm={6} md={4}>
                            <Card className={classes.cardAdd}>
                                <CardActions>
                                    <Button className={classes.buttonAdd} color="primary" onClick={()=>{(setOpenDialog(true))}}>Dodaj</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <DialogWindow
                        key="DialogWindow"
                        open={openDialog} 
                        closeDialog={()=> {
                            setOpenDialog(false)
                            props.handleUpdateEvents()
                        }}
                    />
                </Container>
            </main>
        </div>
    );
}
export default EventCards;