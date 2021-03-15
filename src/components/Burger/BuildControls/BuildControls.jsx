import React from 'react'
import classes from './BuildControls.module.css'
import BuildCOntrol from './BuildControl/BuildControl.jsx'


const controls = [
    {label:"Salad",type:"salad"},
    {label:"Bacon",type:"bacon"},
    {label:"Meat",type:"meat"},
    {label:"Cheese",type:"cheese"},
]


const BuildControls = (props)=>{


   

    return(
        <div className={classes.BuildControls}>

            {controls.map(ctrl=>(

                  <BuildCOntrol removeMore={()=>props.removeAgain(ctrl.type)} clickMore={()=>props.clickAgain(ctrl.type)} key={ctrl.label} label={ctrl.label}></BuildCOntrol>
            ))}

        </div>
    )

}

export default BuildControls