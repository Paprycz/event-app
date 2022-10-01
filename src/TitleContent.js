import { Container, Typography } from "@mui/material";
import useStyles from './styles'

//Adding a header under a blue bar
const TitleContent = () => {
    const {classes} = useStyles()
    return(
        <div className={classes.container}>
            <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Najważniejsze wydarzenia
                </Typography>
                <Typography variant="h5" align="center" color ="textSecondary" paragraph>
                    Bądź na bieżąco ze swoimi sprawami!
                </Typography>
            </Container>
        </div>
    )
}

export default TitleContent;