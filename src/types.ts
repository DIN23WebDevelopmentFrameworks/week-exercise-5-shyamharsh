//Define the interface for the receipe object

export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

//interface for receipe props
export interface IRecipeProps {
    recipeData: IRecipe;
}

//interface for reeipe List
export interface IRecipeListProps {
    recipes: IRecipe[];
}

//interface for receipe tag
export interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: String) => void;
}


//interface for receipe tag list

export interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}