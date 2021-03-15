import React,{Component} from 'react'
import Auxi from '../../hoc/auxi'
import Burguer from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.jsx'


class BurguerBuilder extends Component{


    state={
        igredients:{
            salad:0,
            meat:0,
            bacon:0,
            cheese:0
        }
    }


     addIgredient = (type)=>{


        const oldCount = this.state.igredients[type]
        const updatedCount = oldCount+1
        const updatedIgredients = {...this.state.igredients}
        updatedIgredients[type]=updatedCount


        this.setState({igredients:updatedIgredients})


        
    }
   removeIgredient = (type ) =>{

    

    const oldCount = this.state.igredients[type]
    if(oldCount==0){
        return
    }
    const updatedCount = oldCount-1
    const updatedIgredients = {...this.state.igredients}
    updatedIgredients[type]=updatedCount


    this.setState({igredients:updatedIgredients})

   }

    render(){

        return(
            <Auxi>
                <Burguer igredients={this.state.igredients}></Burguer>
                <BuildControls  removeAgain={this.removeIgredient}  clickAgain={this.addIgredient}></BuildControls>
            </Auxi>
        )
    }

        
}


export default BurguerBuilder