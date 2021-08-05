import { Input, StylesProvider, Typography,TextField } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import { PageContainer } from "components/PageContainer";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import React from "react";
import {useStyles} from "./AllAcounts.style";
import Icon1 from "_assests/img/Usuário Conta.svg"
import Check from "_assests/img/icn-check.svg"
import Fix from "_assests/img/icn-fixado.svg"
import Icon2 from"_assests/img/Group 49.svg"
import Divider from "_assests/img/Line 10.svg"
import Lupa from "_assests/img/Group.svg"

export const AllAcounts:React.FC=()=>{
    const styles=useStyles();
    return(
        <PageContainer>
            <ProcessPageLayout 
                header={
                <div>
                    <h1 className={styles.titulo}>Todas as contas</h1> 
                    <div className={styles.box1}>                        
                        <img src={Icon1}/> 
                        <img className={styles.check} src={Check}/>             
                    </div>   
                    <img src={Divider}/>                       
                </div>                    
                }
                main={
                    <div >
                       <div className={styles.input}>
                            <input className={styles.caixa} placeholder="Buscar pelo nome conta" ></input>
                            <img className={styles.Lupa} src={Lupa}/>
                        </div> 
                                              
                        <div className={styles.box1}>                        
                            <img className={styles.Icon1} src={Icon1}/> 
                            <img className={styles.check2} src={Check}/>             
                        </div>      
                           
                        <img src={Divider}/> 
                            
                        <div className={styles.box2}>                        
                            <img src={Icon2}/> 
                            <img className={styles.fix} src={Fix}/>             
                        </div>                      
                    </div>
                       
                }
                footer={
                    <ProcessPageFooter/>
                }
            />  
        </PageContainer>)
    }