import React, { useState } from "react";
import EventCards from './components/EventCards';
import Bar from "./components/Bar";
import Footer from './components/Footer'
import DisplayEvent from './components/DisplayEvent';
import { CssBaseline } from "@mui/material";
import { Routes ,Route } from 'react-router-dom';

const MainApp = () => {
    
    const [events,setEvents] = useState(Object.values(localStorage))
    
    const updateEvents = () => {
        setEvents(Object.values(localStorage))
        console.log("Events Updated!")
    }
    
    return(
            <>
                <CssBaseline />
                <Bar key="Bar"/>
                <Routes>
                    <Route exact path="/" element={
                        <EventCards key="EventCards" events={events} handleUpdateEvents={()=>{updateEvents()}} />
                    } />
                    {events.map((elementObject,at) =>
                            <Route path={"/Event_"+JSON.parse(elementObject).key} element={
                                <DisplayEvent key={"DisplayEvent_"+at} eventObject={elementObject} />} 
                            />
                        )}
                </Routes>
                <Footer key="Footer" />
            </>
    )
}

export default MainApp;
