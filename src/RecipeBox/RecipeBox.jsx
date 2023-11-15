import './RecipeBox.css'

function RecipeBox(props) {
  return (
    <>
      <p className='recipe-box'>{props.title}</p>
    </>
  );
}

export default RecipeBox;