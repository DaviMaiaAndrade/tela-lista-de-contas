import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    header:{
        height:117.61,      
            
    },
    titulo:{          
        fontFamily:"sans-serif",
        fontSize: 20,          
        textAlign: "left",        
    }, 
    check:{
        marginRigth:28,
        marginLeft:28,        
    }, 
    box1:{        
        display:"flex",  
        justifyContent:"space-between"       
    },    
    caixa:{
        height: 32,
        width: 288,
        left: 0,
        top: 0,
        borderRadius: 2,
        background:" #FFFFFF",              
        boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.15)',
        border:2,
        fontFamily:"sans-serif",
        fontSize:12,
        lineHeight:14,
        color:"text.disabled",
        paddingLeft:35,        
    },
    input:{
        display:"flex",
        marginTop:-30,
        marginLeft:-270,        
        justifyContent:"center" 
    },  
    Lupa:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:-280
    },
    box2:{
        display:"flex",
        justifyContent:"space-between"
    },
    fix:{
        marginRigth:28,
        marginLeft:28,
    },
    box3:{
        display:"flex",
        marginTop:55,
        justifyContent:"space-between"
    },    
    Icon1:{
        
    },
    check2:{        
        
                  
    },
})