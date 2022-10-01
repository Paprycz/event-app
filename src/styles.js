import { makeStyles } from "tss-react/mui"
import { deepPurple } from '@mui/material/colors'
import { maxHeight } from "@mui/system"

const useStyles = makeStyles()((theme) =>{
    return {
        container: {
            display: 'flex',
            backgroundColor: deepPurple[50],
            padding: theme.spacing(8, 0, 6)
        },
        icon: {
            marginRight: '20px'
        },
        button: {
            marginTop: '40px'
        },
        cardGrid: {
            padding: '20px 0'
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        cardMedia: {
            paddingTop: '56.25%' //16:9
        },
        cardContent: {
            flexGrow: 1,
            justifyContent:'space-between'
        },
        cardInfo:{
            fontSize: '70%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        footer: {
            backgroundColor: deepPurple[50],
            padding: '50px 0'
        },
        cardAdd: {
            backgroundColor: theme.palette.action.focus
        },
        buttonAdd: {
            width:'100%',
            height: '20%'
        },
        dialog: {
            width:'70%',
            margin: "auto",
            maxHeight: "false"
        },
        dialogFirstRow: {
            width: '50%',
            display:'flex',
            justifyContent:'space-between',
            flexDirection: 'column',
            float:'left'
        },
        dialogLastRow: {
            width: '100%',
            display:'flex',
            justifyContent:'space-around',
            flexDirection: 'column',
            float:'left'
        },
        dialogContent: {
            display: 'flex',
            flexDirection: 'column',
            padding: '5px'
        },
        dialogAddPhotoContent: {
            display: 'flex',
            alignItems:'center',
            justifyContent:'space-around',
            padding: '5px',
            marginTop:'20px'
        },
        eventContent: {
            display:'flex',
            flexDirection:'row',
            marginLeft:'20%',
            marginRight:'20%'
        },
        titleContent: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            
        },
        eventImage: {
            maxHeight:'1000px',
            width:'auto',
            maxWidth:'50%',
            margin:'auto',
            padding:'10px',
            borderRadius:'25px'
        },
        eventInfoContent: {
            display:'flex',
            justifyContent: 'space-around',
            padding:'30px'
        },
        textContent: {
            marginLeft:'50px',
            marginRight:'50px'
        },
        descriptionContent: {
            marginBottom:'50px'
        }
    }
})

export default useStyles