import { makeStyles } from "tss-react/mui"
import { deepPurple } from '@mui/material/colors'

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
        footer: {
            backgroundColor: deepPurple[50],
            padding: '50px 0'
        },
    }
})

export default useStyles