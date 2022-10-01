import { Typography } from "@mui/material"
import useStyles from "../styles"

const Footer = () => {
    const {classes} = useStyles()
    return(
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                Coś tam coś tam
            </Typography>
        </footer>
    )
}

export default Footer