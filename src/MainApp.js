import React, { useState } from "react";
import EventCards from './EventCards';
import Bar from "./Bar";
import Footer from './Footer'
import DisplayEvent from './DisplayEvent';
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const MainApp = () => {
    
    const [events,setEvents] = useState(Object.values(localStorage))
    
    const updateEvents = () => {
        setEvents(Object.values(localStorage))
        console.log("Events Updated!")
    }
    
    return(
        <Router>
            <CssBaseline />
            <Bar key="Bar"/>
            <Switch>
                <Route exact path="/">
                    <EventCards key="EventCards" events={events} handleUpdateEvents={()=>{updateEvents()}}/>
                </Route>
                {events.map((element,at) =>
                    <Route exact path={"/"+JSON.parse(element).key}>
                        <DisplayEvent key={"DisplayEvent_"+at} eventObject={element} />
                    </Route>
                )}
            </Switch>
            <Footer key="Footer" />
        </Router>
    )
}

export default MainApp;