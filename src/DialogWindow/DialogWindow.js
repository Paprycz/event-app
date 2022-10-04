import React, { useState } from "react";
import { Dialog, DialogActions, DialogTitle, DialogContent, FormHelperText, TextField, dialogTitleClasses } from '@mui/material';
import { Button, Grid, Input, } from "@mui/material";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import Select from '@mui/material/Select';

import { storage } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'

import useStylesDialog from "../styles/stylesDialog";



const DialogWindow = (props) => {

//STYLES HANDLER (CSS - MUI)
    const {classes} = useStylesDialog();


//FUNCTION CREATING EVENT OBJECT

    const makeAnEvent = () => {
        return({
            key : props.eventKey,
            title : title.value,
            place : place.value,
            type : list.value,
            date : date.value,
            time: time.value,
            phone : phone.value,
            description : description.value,
            email : email.value,
            image : image.name + '_' + props.eventKey
        })
    }

//DIALOG CLOSING FUNCTION

    const handleClose = () => {
        clearDialog()
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
    const [place, setPlace] = useState({
        value: "",
        error: false,
        errorMes: ""
    })

    //EVENT PLACE HANDLE FUNCTION
    const handlePlaceChange = (e) => {
        setPlace({
            ...place,
            value: e.target.value
        })
    }

    //EVENT TYPE PICKER STATE
    const [list, setList] = useState({
        value: "",
        error: false,
        errorMes: ""
    })

    //EVENT TYPE PICKER HANDLE FUNCTION
    
    const handleListChange = (e) => {
        setList({
            ...list,
            value: e.target.value
        });
    }

    //EVENT IMAGE STATE
    const [image, setImage] = useState(null)

    //EVENT IMAGE UPLOAD FUNCTION
    const handleImageUpload = () => {
        if(image === null) return;
        const imageRef = ref(storage, `images/${image.name}_${props.eventKey}`)
        uploadBytes(imageRef, image).then(() => {
            alert("Image uploaded")
        })
    }
    
    //EVENT USE IMAGE FUNCTION

    const imageUse = () => {
        if(!image) return(<div>Brak zdjęcia</div>)
        return (
        <div className={classes.imageMiniature}>
            {image.name}
        </div>
        )
    }

    //EVENT DATE STATE
    const [date, setDate] = useState({
        value: "",
        error: false,
        errorMes: ""
    })

    //EVENT DATE HANDLE FUNCTION
    const handleDateChange = (e) => {
        setDate({
            ...date,
            value: e.target.value
        })
    }

    //EVENT TIME STATE
    const [time, setTime] = useState({
        value: "",
        error: false,
        errorMes: ""
    })

    //EVENT TIME HANDLE FUNCTION
    const handleTimeChange = (e) => {
        setTime({
                ...time,
                value: e.target.value
            })
    }

    //EVENT DESCRIPTION STATE
    const [description, setDescription] = useState({
        value: "",
        error: false,
        errorMes: ""
    })
    //EVENT DESCRIPTION HANDLE FUNCTION
    const handleDescriptionChange = (e) => {
        setDescription({
            ...description,
            value: e.target.value
        })
    }

    //EVENT MOBILE NUMBER STATE
    const [phone, setPhone] = React.useState({
        value: '+48',
        error: false,
        errorMes: ""
        })

    //EVENT MOBILE NUMBER HANDLE FUNCTION
    const handlePhoneChange = (newPhone) => {
        setPhone({
            ...phone,
            value: newPhone
        })
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
        setImage(null)
        setTitle({value:"", error:false, errorMes: ""})
        setPlace({value:"", error:false, errorMes: ""})
        setList({vlaue:"", error:false, errorMes: ""})
        setDate({value:"", error:false, errorMes: ""})
        setTime({value:"", error:false, errorMes: ""})
        setPhone({value:"+48", error:false, errorMes: ""})
        setDescription({value:"", error:false, errorMes: ""})
        setEmail({value:"", error:false, errorMes: ""})
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
                    errorMes: "Określ miejsce!"
                })
                errorCatch=true
            } 
            
            //IF RIGHT
            else {
                setTitle({
                    ...title,
                    error: false,
                    errorMes: ""
                })
            }

        //PLACE CHECKING CONDITIONS
        
            //IF WRONG
            if(!place.value || place.value[0] === " ") {
                setPlace({
                    ...place,
                    error:true,
                    errorMes: "Określ miejsce!"
                })
                errorCatch=true
            } 
            
            //IF RIGHT
            else {
                setPlace({
                    ...place,
                    error: false,
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

        //TIME CHECKING CONDITIONS
        
            //IF WRONG
            if(!time.value || time.value[0] === " ") {
                setTime({
                    ...time,
                    error:true,
                    errorMes: "Określ czas!"
                })
                errorCatch=true
            } 
            
            //IF RIGHT
            else {
                setTime({
                    ...time,
                    error:false,
                    errorMes: ""
                })
            }

            //PHONE CHECKING CONDITIONS
        
                //IF WRONG
            if(!matchIsValidTel(phone.value)) {
                setPhone({
                    ...phone,
                    error:true,
                    errorMes: "Nieprawidłowy numer!"
                })
                errorCatch=true
            } 
            
            //IF RIGHT
            else {
                setPhone({
                    ...phone,
                    error:false,
                    errorMes: ""
                })
            }

            //DESCRIPTION CHECKING CONDITIONS
        
            //IF WRONG
        if(!description.value || description.value[0] === " ") {
            setDescription({
                ...description,
                error:true,
                errorMes: "Nieprawidłowy opis!"
            })
            errorCatch=true
        } 
        
        //IF RIGHT
        else {
            setDescription({
                ...description,
                error:false,
                errorMes: ""
            })
        }

        //EMAIL CHECKING CONDITIONS
        const atPosition = email.value.indexOf('@')
        const dotPosition = email.value.indexOf('.',atPosition)
        
            //IF WRONG
                //IF ADRESS EXISTS && (ADRESS DOESN'T CONTAIN  '@' || ADRES DOESN'T CONTAIN '.' AFTER '@' || '.' COMES RIGHT AFTER '@' || '.' APPEARS AT THE END OF THE ADRESS )
        if(atPosition<1 || dotPosition===-1 || dotPosition-atPosition<2 || (dotPosition+1)===email.value.length) {
            setEmail({
                ...email,
                error:true,
                errorMes:"Nieprawidłowy e-mail!"
            })
            errorCatch=true
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
        if(!errorCatch || title.error) {
            const temp = makeAnEvent()
            localStorage.setItem("Event_"+temp.key, JSON.stringify(temp))
            handleImageUpload()
            handleClose()
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
                <Grid item className={classes.firstRow}>
                    <div className={classes.input}>
                        <FormControl error={title.error} >
                            Nazwa wydarzenia:
                            
                            <Input
                                id="titleContent"  
                                fullWidth 
                                value={title.value} 
                                onChange={handleTitleChange}
                            />
                            
                            <FormHelperText>{title.errorMes}</FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.input}>
                        <FormControl error={place.error} >
                            Miejsce:
                            
                            <Input 
                                id="placeContent" 
                                fullWidth 
                                value={place.value} 
                                onChange={handlePlaceChange}
                            />
                            
                            <FormHelperText>{place.errorMes}</FormHelperText>
                        </FormControl>
                    </div>
                    
                    <div className={classes.input}>
                        Rodzaj wydarzenia:

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
                            
                            <div className={classes.addPhoto}>
                                <Button variant="outlined" component="label">
                                    Dodaj zdjęcie
                                   
                                    <input id="photoInput" hidden accept="image/*" multiple type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
                                </Button>
                                {imageUse()}
                            </div>
                    </div>
                </Grid>

                <Grid item className={classes.firstRow}>
                    <div className = {classes.input}>
                        Data:
                        
                        <TextField id="dateContent" type="date" value={date.value} error={date.error} helperText={date.errorMes} onChange={handleDateChange} />
                    </div>
                    
                    <div className = {classes.input}>
                        <FormControl error={time.error}>
                            Czas rozpoczęcia:
                            
                            <TextField id="timeContent" type="time" error={phone.error} value={time.value} onChange={handleTimeChange}/>
                            
                            <FormHelperText>{time.errorMes}</FormHelperText>
                        </FormControl>
                    </div>
                    
                    <div className = {classes.input}>
                        <FormControl error={phone.error}>
                            Nr telefonu:
                            
                            <MuiTelInput id="phoneContent"
                                value={phone.value}
                                error={phone.error}
                                onChange={handlePhoneChange} 
                                focusOnSelectCountry
                            />
                            
                            <FormHelperText>{phone.errorMes}</FormHelperText>
                        </FormControl>
                    </div>
                    
                    <FormControl error={email.error}>
                        <div className={classes.input}>
                            e-mail:
                            <Input id="emailContent" fullWidth value={email.value} onChange={handleEmailChange}></Input>
                        </div>
                        
                        <FormHelperText>{email.errorMes}</FormHelperText>
                    </FormControl>
                </Grid>
                
                <Grid item className={classes.secondRow}>
                    <FormControl error={description.error}>
                    Opis:
                    <TextField id="descriptionContent"  multiline error={description.error} value={description.value} onChange={handleDescriptionChange} />
                    <FormHelperText>{description.errorMes}</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </DialogContent>
        
        <DialogActions>
            <Button onClick={clearDialog}>Wyczyść</Button>
            
            <Button 
                onClick={()=>{
                    checkEvent()
                }}
            >
                Zatwierdź
            </Button>
        </DialogActions>
    </Dialog>
    )
}
export default DialogWindow;