import React from 'react'
import { Button } from 'components/Button'
import { useStyles } from './ProcessPageFooter.style'
import { KeyboardArrowLeft } from '@material-ui/icons'


export const ProcessPageFooter : React.FC = () =>{
    const styles = useStyles()
    return (
        <div className={styles.buttonsWrapper}>
            <Button palette="secondary" onClick={()=> console.log("Voltar")} startIcon={ <KeyboardArrowLeft color="primary" radius={20}/>} >
                Voltar
            </Button>
        </div>
    )
}
