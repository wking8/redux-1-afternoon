import { createStore } from 'redux'

// Initialize State
const initialState = {
    name: '',
    category: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: []
}

// Constants
export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const AUTHOR_FIRST_NAME = 'AUTHOR_FIRST_NAME'
export const AUTHOR_LAST_NAME = 'AUTHOR_LAST_NAME'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

// Reducers
function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_RECIPE_NAME:
            return { ...state, name: action.payload }
        case UPDATE_RECIPE_CATEGORY:
            return { ...state, category: action.payload }
        case AUTHOR_FIRST_NAME:
            return { ...state, authorFirstName: action.payload }
        case AUTHOR_LAST_NAME:
            return { ...state, authorLastName: action.payload }
        case ADD_INGREDIENTS:
            const newNumNums = [...state.ingredients, action.payload]
            return { ...state, ingredients: newNumNums }
        case ADD_INSTRUCTIONS:
            const newInstructions = [...state.instructions, action.payload]
            return { ...state, instructions: newInstructions }
        case ADD_RECIPE:
            const { name, category, authorFirstName, authorLastName, ingredients, instructions } = state;
            const recipe = { name, category, authorFirstName, authorLastName, ingredients, instructions };
            const newRecipe = [...state.recipes, recipe];
            return { ...state, recipes: newRecipe }
        default: return state
    }
}


// Export store
export default createStore(reducer)