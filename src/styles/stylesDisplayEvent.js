import { makeStyles } from "tss-react/mui"
import { deepPurple } from '@mui/material/colors'

const useStylesDisplayEvent = makeStyles()((theme) =>{
    return {
        container: {
            display: 'flex',
            backgroundColor: deepPurple[50],
            padding: theme.spacing(8, 0, 6)
        },
        event: {
            display:'flex',
            flexDirection:'row',
            marginLeft:'15%',
            marginRight:'15%'
        },
        title: {
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
        timeAndPlace: {
            display:'flex',
            justifyContent: 'space-around',
            padding:'30px'
        },
        eventTextContent: {
            marginLeft:'50px',
            marginRight:'50px'
        },
        description: {
            marginBottom:'50px'
        }
    }
})

export default useStylesDisplayEvent