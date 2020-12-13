import './App.css';
import React from "react";
import {Component} from "react";

class App extends Component {
    state = {
        isAddRecipeFormDisplayed: false,
        recipes: [],
        newRecipeName: '',
        newRecipeInstructions: ''
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: target.value})
    }

    // handleRecipeNameChange = (event) =>{
    //     const value = event.target.value;
    //     this.setState({newRecipeName : value})
    // }
    //
    // handleRecipeInstructionsChange = (event) => {
    //     const value = event.target.value;
    //     this.setState({newRecipeInstructions: value})
    // }

    toggleAddRecipeForm = () => {
        this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
    }

    submitRecipe = (event) => {
        event.preventDefault();
        this.setState({
            recipes: [
                {
                    name: this.state.newRecipeName,
                    instructions: this.state.newRecipeInstructions
                }
            ]
        })
    }

    render() {
        const addNewRecipeForm = (
            <form id={"recipe-form"} onSubmit={this.submitRecipe}>
                <label htmlFor={"newRecipeName"}>Recipe name: </label>
                <input type="text" name={"newRecipeName"} onChange={this.handleChange} value={this.state.newRecipeName}/>
                <label htmlFor={"newRecipeInstructions"}>Instructions:</label>
                <textarea
                    name={"newRecipeInstructions"}
                    placeholder={"write recipe instructions here..."}
                    onChange={this.handleChange}
                    value={this.state.newRecipeInstructions}
                />
                <input type={"submit"}/>
            </form>
        )

        return (
            <div className="App">
                <h1 className="App-header">My Recipes</h1>
                {
                    this.state.isAddRecipeFormDisplayed ?
                        addNewRecipeForm :
                        <button id={"add-recipe"} onClick={this.toggleAddRecipeForm}>Add Recipe</button>
                }
                {
                    this.state.recipes.length > 0 ?
                        <ul>
                            <li>{this.state.recipes[0].name}</li>
                        </ul>
                        :
                        <p>There are no recipes to list yet... #GrowthMindset</p>
                }
            </div>
        );
    }
}

export default App;
