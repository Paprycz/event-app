import React, { useState } from "react";
import EventCards from './EventCards';
import Bar from "./Bar";
import Footer from './Footer'
import DisplayEvent from './DisplayEvent';
import { CssBaseline } from "@mui/material";
import {BrowserRouter, Routes ,Route } from 'react-router-dom';

const MainApp = () => {
    
    const [events,setEvents] = useState(Object.values(localStorage))
    
    const updateEvents = () => {
        setEvents(Object.values(localStorage))
        console.log("Events Updated!")
    }
    
    return(
        <BrowserRouter>
            <CssBaseline />
            <Bar key="Bar"/>
            <Routes>
                <Route exact path="/event-app" element={
                    <EventCards key="EventCards" events={events} handleUpdateEvents={()=>{updateEvents()}}/>
                } />
                {events.map((element,at) =>
                    <Route exact path={"/Event_"+JSON.parse(element).key} element={
                        <DisplayEvent key={"DisplayEvent_"+at} eventObject={element} />
                    } />
                )}
            </Routes>
            <Footer key="Footer" />
        </BrowserRouter>
    )
}

export default MainApp;
