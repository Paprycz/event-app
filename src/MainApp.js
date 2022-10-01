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
        <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
            <CssBaseline />
            <Bar key="Bar"/>
            <Routes>
                <Route exact path="/event-app" element={
                    <EventCards key="EventCards" events={events} handleUpdateEvents={()=>{updateEvents()}} />
                } />
                 {events.map((elementObject,at) =>
                        <Route exact path={"/Event_"+JSON.parse(elementObject).key} element={
                            <DisplayEvent key={"DisplayEvent_"+at} eventObject={elementObject} />} 
                        />
                    )}
            </Routes>
            <Footer key="Footer" />
        </BrowserRouter>
    )
}

export default MainApp;
