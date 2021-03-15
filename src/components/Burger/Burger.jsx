import React from 'react'
import classes from './Burguer.module.css'

import BurguerIgredients from '../Burger/BurgerIgredients/BurgerIngredients'


const burguer = (props)=>{


      const transformedIgredients = Object.keys(props.igredients).map(igKey=>{

          return [...Array(props.igredients[igKey])].map((_,i)=>{

               return <BurguerIgredients key={igKey+i} type={igKey}></BurguerIgredients>

          })

      })

      console.log(transformedIgredients)

      return(
      <div className={classes.Burguer}>
         <BurguerIgredients type='bread-top'></BurguerIgredients>
           {transformedIgredients}
         <BurguerIgredients type='bread-bottom'></BurguerIgredients>  
         
      </div>
      )

}

export default burguer