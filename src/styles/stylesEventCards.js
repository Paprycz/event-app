import { makeStyles } from "tss-react/mui"

const useStylesEventCards = makeStyles()((theme) =>{
    return {
        container: {
            padding: '20px 0',
        },
        cardGrid: {
            alignItems:'center',
        },
        gridItem:{
            height:'100%',
            display:'flex',
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        image: {
            paddingTop: '56.25%' //16:9
        },
        content: {
            flexGrow: 1,
            justifyContent:'space-between'
        },
        timeAndPlace:{
            fontSize: '90%',
            marginBottom:'5px'
        },
        description:{
            fontSize: '70%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        cardAdd: {
            display: 'flex',
            backgroundColor: theme.palette.action.focus,
            height: '100%',
            borderRadius:'30%'
        },
        buttonAdd: {
            height: '100%',
            width:'100%',
            color:'darkgrey',
            fontSize:'80px'
        },
    }
})

export default useStylesEventCards