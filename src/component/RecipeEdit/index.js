import { Button, FormControl, Input, InputLabel, TextField } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addRecipe } from '../../redux/recipeActionCreator';

export default function RecipeEdit() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [ingredients, setIngredients] = useState([''])
    const [name, setName] = useState('')
    const [steps, setSteps] = useState('')
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
         
    })

    const addNewIngredientLine = (e)=> {       
        if(e.charCode === 13){            
            setIngredients([...ingredients, '']);
        }else{

           // setIngredients([...ingredients, e.target.value]);
        }
    }

    const save = () => {
        const recipe = {
            name, steps, imageURL
        }      
        dispatch(addRecipe(recipe))
        history.push('/')
    }

    return (
        <div>
            <FormControl fullWidth={true}>
                <InputLabel htmlFor="recipe-title">Title</InputLabel>
                <Input id="recipe-title" value={name} onChange={e => setName(e.target.value)}/>          
            </FormControl>

            {
                ingredients.map((i, index) => (                         
                    <FormControl key={index} fullWidth={true}>
                        <InputLabel htmlFor={`recipe-ingredient-${index}`}>Ingredient</InputLabel>
                        <Input 
                            id={`recipe-ingredient-${index}`} 
                            onKeyPress={addNewIngredientLine} 
                            value={ingredients[index]}
                            onChange={e => addNewIngredientLine(e)}/>  
                    </FormControl>
                ))
            }

            <FormControl fullWidth={true}>                
                <TextField                    
                    id="recipe-todo"
                    label="How to prepare"
                    multiline
                    rowsMax={4}
                    value={steps}
                    onChange={e => setSteps(e.target.value)}
                />
            </FormControl>
            
            <FormControl fullWidth={true}>
                <InputLabel htmlFor="recipe-image">Image Link</InputLabel>
                <Input 
                    id="recipe-image"
                    value={imageURL}
                    onChange={e => setImageURL(e.target.value)}/>          
            </FormControl>

            
            <Box display="flex" justifyContent="center" m={1} p={1}>
                <Box p={1}>
                    <Button variant="contained" color="primary" onClick={save}>
                        Save
                    </Button>         
                </Box>
                <Box p={1}>
                    <Button variant="contained" color="secondary">
                        Cancel
                    </Button>    
                </Box>
            </Box>  
            
        </div>
    )
}
