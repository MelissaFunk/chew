import { ReactTinyLink } from 'react-tiny-link'

function RecipeCard({ recipe }) {
  
  return(
    <div>
      <ReactTinyLink 
        cardSize="large"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={recipe.link}
        width="300px"
        header={recipe.name}
      />
    </div>
  )
}

export default RecipeCard