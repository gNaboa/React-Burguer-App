import React from 'react'
import Auxi from '../../hoc/auxi'
import classes from './Layout.module.css'



const layout = (props)=>(

    <Auxi>
            <div className={classes.Thread}>Toolbar,sidedrawer,Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
   </Auxi>
        
)

export default layout