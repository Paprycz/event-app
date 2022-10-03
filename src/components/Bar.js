import {AppBar, Toolbar, Typography} from '@mui/material'
import useStyles from '../styles/styles'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

//Adding a blue bar on top
const Bar = () => {
    const {classes} = useStyles()
    return(
        <AppBar position = "relative">
            <Toolbar>
                <CalendarMonthIcon className={classes.icon} />
                <Typography variant = "h6">
                    jakasnazwa.com
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Bar;