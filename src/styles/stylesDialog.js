import { makeStyles } from "tss-react/mui"

const useStylesDialog = makeStyles()((theme) =>{
    return {
        dialog: {
            width:'70%',
            margin: "auto",
            maxHeight: "false"
        },
        firstRow: {
            width: '50%',
            display:'flex',
            justifyContent:'space-between',
            flexDirection: 'column',
            float:'left'
        },
        secondRow: {
            width: '100%',
            display:'flex',
            justifyContent:'space-around',
            flexDirection: 'column',
            float:'left'
        },
        input: {
            display: 'flex',
            flexDirection: 'column',
            padding: '5px'
        },
        addPhoto: {
            display: 'flex',
            alignItems:'center',
            justifyContent:'space-around',
            padding: '5px',
            marginTop:'20px'
        },
        imageMiniature: {
            fontSize:'80%',
            marginLeft:'10px'
        }
    }
})

export default useStylesDialog