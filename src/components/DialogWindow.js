import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions} from '@mui/material';
import { Button, Grid, Input, } from "@mui/material";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { MuiTelInput } from 'mui-tel-input'
import Select from '@mui/material/Select';

import useStyles from "../styles";



const DialogWindow = (props) => {

//STYLES HANDLER (CSS - MUI)
    const {classes} = useStyles();

//EVENTS STATE (CONTAINER)

//FUNCTION CREATING EVENT OBJECT

    const makeAnEvent = () => {
        return({
            key : document.querySelector("#dateContent").value+'_'+document.querySelector("#titleContent").value.replace(/\s+/g, '-').toLowerCase(),
            title : document.querySelector("#titleContent").value,
            place : document.querySelector("#placeContent").value,
            type : list,
            date : document.querySelector("#dateContent").value,
            time: document.querySelector("#timeContent").value,
            phone : document.querySelector("#phoneContent").value,
            description : document.querySelector("#descriptionContent").value,
            email : document.querySelector("#emailContent").value
        })
    }



    //dialog closing function
    const handleClose = () => {
        props.closeDialog()
    }

//EVENT DIALOG INPUTS CHANGE

    //event title state
    const [title, setTitle] = useState("")
    //event title handle function
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    //event place state
    const [place, setPlace] = useState("")
    //event place handle function
    const handlePlaceChange = (event) => {
        setPlace(event.target.value)
    }
    //event date state
    const [date, setDate] = useState("")
    //event date handle function
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }
    //event time state
    const [time, setTime] = useState("")
    //event time handle function
    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }
    //event description state
    const [description, setDescription] = useState("")
    //event description handle function
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    //event type picker state
    const [list, setList] = useState("")
    //event type picker handle function
    const handleListChange = (event) => {
        setList(event.target.value);
    }

    //event mobile number state
    const [phone, setPhone] = React.useState('+48')
    //event mobile numberhandle function
    const handlePhoneChange = (newPhone) => {
        setPhone(newPhone)
    }

    //event e-mail number state
    const [email, setEmail] = React.useState('')
    //event mobile numberhandle function
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    //event input clearing function
    const clearDialog = () =>{ 
        setTitle("")
        setPlace("")
        setList("")
        setDate("")
        setTime("")
        setPhone("+48")
        setDescription("")
        setEmail("")
    }
    
    const addImage = () => {
        const img = document.createElement("img")

    }

    return(
        <Dialog 
        open={props.open}
        onClose={handleClose}
        className={classes.dialog}
        maxWidth={false}
    >
        <DialogTitle>Dodaj wydarzenie</DialogTitle>
        <DialogContent>
            <Grid container spacing={4}>
                <Grid item className={classes.dialogFirstRow}>
                    <div className={classes.dialogContent}>
                        <div>Nazwa wydarzenia:</div>
                        <Input id="titleContent" fullWidth value={title} onChange={handleTitleChange}></Input>
                    </div>
                    <div className={classes.dialogContent}>
                        <div>Miejsce:</div>
                        <Input id="placeContent" fullWidth value={place} onChange={handlePlaceChange}></Input>
                    </div>
                    <div className={classes.dialogContent}>
                        <div>Rodzaj wydarzenia:</div>
                        <FormControl fullWidth required hiddenLabel variant='standard' sx={{marginTop:2}}>
                                <Select
                                    id="typeContent"
                                    value={list}
                                    label="Rodzaj"
                                    onChange={handleListChange}
                                >
                                    <MenuItem value="Sport">Sport</MenuItem>
                                    <MenuItem value="Kultura">Kultura</MenuItem>
                                    <MenuItem value="Zdrowie">Zdrowie</MenuItem>
                                </Select>
                            </FormControl>
                            <div className={classes.dialogAddPhotoContent}>
                            <Button variant="outlined" component="label">
                                Dodaj zdjęcie
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                                <div>Brak zdjęcia</div>
                            </div>
                    </div>
                </Grid>
                <Grid item className={classes.dialogFirstRow}>
                    <div className = {classes.dialogContent}>
                        Data:
                        <TextField id="dateContent" type="date" value={date} onChange={handleDateChange} />
                    </div>
                    <div className = {classes.dialogContent}>
                        Czas rozpoczęcia:
                        <TextField id="timeContent" type="time" value={time} onChange={handleTimeChange}/>
                    </div>
                    <div className = {classes.dialogContent}>
                        <div>Nr telefonu:</div>
                        <MuiTelInput id="phoneContent"
                            value={phone} 
                            onChange={handlePhoneChange} 
                            focusOnSelectCountry
                        />
                    </div>
                    <div className={classes.dialogContent}>
                        <div>e-mail:</div>
                        <Input id="emailContent" fullWidth value={email} onChange={handleEmailChange}></Input>
                    </div>
                </Grid>
                <Grid item className={classes.dialogLastRow}>
                    <div>Opis:</div>
                    <TextField id="descriptionContent" multiline value={description} onChange={handleDescriptionChange} />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={clearDialog}>Wyczyść</Button>
            <Button 
                onClick={()=>{
                    const temp = makeAnEvent()
                    localStorage.setItem("Event_"+temp.key, JSON.stringify(temp))
                    handleClose()
                    clearDialog()
                }}
            >
                Zatwierdź
            </Button>
        </DialogActions>
    </Dialog>
    )
}
export default DialogWindow;