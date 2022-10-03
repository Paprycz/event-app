import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Card, CardActions} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import useStylesEventCards from '../styles/stylesEventCards';
import TitleContent from './TitleContent';
import MakeAnEventHTML from './MakeAnEventHTML';
import DialogWindow from '../DialogWindow/DialogWindow';

const EventCards = (props) => {


 //STYLES HANDLER (CSS - MUI)
     const {classes} = useStylesEventCards();

//Dialog opening/closing state
    const [openDialog,setOpenDialog] = useState(false)

//UpdatingEventsState

    return (
        <div>   
            <main>
                <TitleContent key="TitleContent" />
                
                <Container className={classes.container} maxWidth="md">
                    <Grid container className={classes.cardGrid} spacing={4}>
                        {props.events.map((element,at) => 
                            <MakeAnEventHTML 
                                key={"EventHTML"+at} 
                                element={JSON.parse(element)} 
                                updateEvent={()=>{props.handleUpdateEvents()}} 
                            />
                        )}
                            <Grid item className={classes.gridItem} key='createEvent' xs={12} sm={6} md={4}>

                            <Card className={classes.cardAdd}>
                                    <Button
                                        className={classes.buttonAdd} 
                                        color="primary" 
                                        onClick={()=>{(setOpenDialog(true))}}
                                    >
                                        <AddCircleIcon fontSize="inherit" />
                                    </Button>
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