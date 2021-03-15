import React from 'react'
import classes from './BurgerIngredients.module.css'

import PropTypes from 'prop-types'


const Igredients = (props) =>{

   let igredients = null

   switch(props.type){

   case('bread-bottom'):
       igredients = <div className={classes.BreadBottom}></div>
       break
   case('bread-top'):
       igredients = (
              <div className={classes.BreadTop}>
                 <div className={classes.Seeds1}></div>
                 <div className={classes.Seeds2}></div>
              </div>
       )
       break
   case('meat'):
       igredients = <div className={classes.Meat}></div>
       break
   case('cheese'):
       igredients = <div className={classes.Cheese}></div>
       break
   case('salad'):
       igredients = <div className={classes.Salad}></div>
       break
   case('bacon'):
       igredients = <div className={classes.Bacon}></div>
       break

       default:
          igredients=null
  
       
   }


   
   



   return igredients;


}

    
//igredients.propTypes={
  // type:PropTypes.string.isRequired  //só aceita strings e é obrigatorio
//}


export default Igredients