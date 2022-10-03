import React, { useState } from "react";
import { Dialog, DialogActions, DialogTitle, DialogContent, FormHelperText, TextField } from '@mui/material';
import { Button, Grid, Input, } from "@mui/material";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { MuiTelInput } from 'mui-tel-input'
import Select from '@mui/material/Select';

import useStyles from "../styles";



const DialogWindow = (props) => {

//STYLES HANDLER (CSS - MUI)
    const {classes} = useStyles();

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

//DIALOG CLOSING FUNCTION

    const handleClose = () => {
        props.closeDialog()
    }

//EVENT DIALOG INPUTS CHANGE

     //EVENT TITLE STATE
     const [title, setTitle] = useState({
         value: "",
         error: false,
         errorMes: ""
    })
    
    //EVENT TITLE HANDLE FUNCTION
    const handleTitleChange = (e) => {
        setTitle({
            ...title, 
            value: e.target.value
        })
    }

    //EVENT PLACE STATE
    const [place, setPlace] = useState("")

    //EVENT PLACE HANDLE FUNCTION
    const handlePlaceChange = (event) => {
        setPlace(event.target.value)
    }

    //EVENT TYPE PICKER STATE
    const [list, setList] = useState({
        value: "",
        error: false,
        errorMes: ""
    })

    //EVENT TYPE PICKER HANDLE FUNCTION
    
    const handleListChange = (event) => {
        setList({
            ...list,
            value: event.target.value
        });
    }

    //EVENT IMAGE SRC STATE
    const [image, setImage] = useState("")

    //EVENT IMAGE MINIATURE SET FUNCTION
    const checkImage = ()=>{
        if(image !== ""){
            return(
                <img src={image}/>
            )
        } else return(<div>Brak Zdjęcia</div>)
    }

    //EVENT DATE STATE
    const [date, setDate] = useState({
        value: "",
        error: false,
        errorMes: ""
    })

    //EVENT DATE HANDLE FUNCTION
    const handleDateChange = (event) => {
        setDate({
            ...date,
            value: event.target.value
        })
    }

    //EVENT TIME STATE
    const [time, setTime] = useState("")

    //EVENT TIME HANDLE FUNCTION
    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    //EVENT DESCRIPTION STATE
    const [description, setDescription] = useState("")

    //EVENT DESCRIPTION HANDLE FUNCTION
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    //EVENT MOBILE NUMBER STATE
    const [phone, setPhone] = React.useState('+48')

    //EVENT MOBILE NUMBER HANDLE FUNCTION
    const handlePhoneChange = (newPhone) => {
        setPhone(newPhone)
    }

    //EVENT E-MAIL NUMBER STATE
    const [email, setEmail] = React.useState({
        value: "",
        error: false,
        errorMes: ""
    })

    //EVENT E-MAIL HANDLE FUNCTION
    const handleEmailChange = (event) => {
        setEmail({
            ...email, 
            value: event.target.value
        })
    }

//EVENT INPUT CLEARING FUNCTION
    const clearDialog = () =>{ 
        console.log(image)
        console.log(document.querySelector("#photoInput").value)
        setTitle({...title, value:"", error:false, errorMes: ""})
        setPlace("")
        setList({...list, vlaue:"", error:false, errorMes: ""})
        setDate({...date, value:"", error:false, errorMes: ""})
        setTime("")
        setPhone("+48")
        setDescription("")
        setEmail("")
    }

//EVENT INPUTS CHECKING FUNCTION
    const checkEvent = () => {

        //ERROR CATCHING VARIABLE
        let errorCatch = false

        //TITLE CHECKING CONDITIONS
        
            //IF WRONG
        if(!title.value || title.value[0] === " ") {
            setTitle({
                ...title,
                error:true,
                errorMes: "Tytuł nie może być pusty!"
            })
            errorCatch=true
        } 
        
        //IF RIGHT
        else {
            setTitle({
                ...title,
                error:false,
                errorMes: ""
            })
        }

        //TYPE CHECKING CONDITIONS
        
            //IF WRONG
        if(!list.value || list.value[0] === " ") {
            setList({
                ...list,
                error: true,
                errorMes: "Wybierz rodzaj wydarzenia!"
            })
            errorCatch=true
        } 
        
            //IF RIGHT
        else {
            setList({
                ...list,
                error: false,
                errorMes: ""
            })
        }

        //DATE CHECKING CONDITIONS
        
            //IF WRONG
        if(!date.value) {
            setDate({
                ...date,
                error: true,
                errorMes:"Wprowadź datę!",
            })
            errorCatch=true
        }

            //IF RIGHT
        else {
            setDate({
                ...date,
                error: false,
                errorMes:"",
            })
        }

        //EMAIL CHECKING CONDITIONS
        const atPosition = email.value.indexOf('@')
        const dotPosition = email.value.indexOf('.',atPosition)

        
            //IF WRONG
                //IF ADRESS EXISTS && (ADRESS DOESN'T CONTAIN  '@' || ADRES DOESN'T CONTAIN '.' AFTER '@' || '.' COMES RIGHT AFTER '@' || '.' APPEARS AT THE END OF THE ADRESS )
        if(email.value && (atPosition<1 || dotPosition===-1 || dotPosition-atPosition<2 || (dotPosition+1)===email.value.length)) {
            setEmail({
                ...email,
                error:true,
                errorMes:"Nieprawidłowy e-mail!"
            })
        }
        
            //IF RIGHT
        else{
            setEmail({
                ...email,
                error:false,
                errorMes:""
            })
        }

        //NO ERROR CONDITIONS
        if(!errorCatch) {
            const temp = makeAnEvent()
            localStorage.setItem("Event_"+temp.key, JSON.stringify(temp))
            handleClose()
            clearDialog()
        }
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
                        <FormControl error={title.error} >
                            <div>Nazwa wydarzenia:</div>
                                <Input
                                    id="titleContent"  
                                    fullWidth 
                                    value={title.value} 
                                    onChange={handleTitleChange}
                                />
                                <FormHelperText>{title.errorMes}</FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.dialogContent}>
                        <div>Miejsce:</div>
                        <Input id="placeContent" fullWidth value={place} onChange={handlePlaceChange}></Input>
                    </div>
                    
                    <div className={classes.dialogContent}>
                        <div>Rodzaj wydarzenia:</div>
                        
                        <FormControl fullWidth required hiddenLabel variant='standard' sx={{marginTop:2}} error={list.error}>
                            <Select
                                id="typeContent"
                                value={list.value}  
                                label="Rodzaj"
                                onChange={handleListChange}
                            >
                                <MenuItem value="Sport">Sport</MenuItem>
                                <MenuItem value="Kultura">Kultura</MenuItem>
                                <MenuItem value="Zdrowie">Zdrowie</MenuItem>
                            </Select>
                                
                            <FormHelperText>{list.errorMes}</FormHelperText>
                        </FormControl>
                            
                            <div className={classes.dialogAddPhotoContent}>
                                <Button variant="outlined" component="label">
                                    Dodaj zdjęcie
                                    <input id="photoInput" hidden accept="image/*" multiple type="file" />
                                </Button>
                                    <div>{checkImage()}</div>
                            </div>
                    </div>
                </Grid>

                <Grid item className={classes.dialogFirstRow}>
                    <div className = {classes.dialogContent}>
                        Data:
                        <TextField id="dateContent" type="date" value={date.value} error={date.error} helperText={date.errorMes} onChange={handleDateChange} />
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
                    
                    <FormControl error={email.error}>
                        <div className={classes.dialogContent}>
                            <div>e-mail:</div>
                            <Input id="emailContent" fullWidth value={email.value} onChange={handleEmailChange}></Input>
                        </div>
                        
                        <FormHelperText>{email.errorMes}</FormHelperText>
                    </FormControl>
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
                onClick={()=>{checkEvent()}}
            >
                Zatwierdź
            </Button>
        </DialogActions>
    </Dialog>
    )
}
export default DialogWindow;