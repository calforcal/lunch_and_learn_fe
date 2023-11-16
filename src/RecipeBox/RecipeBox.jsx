import { FaRegHeart, FaHeart } from "react-icons/fa";
import './RecipeBox.css'

function RecipeBox(props) {
  return (
    <div className='recipe-box-container'>
      <img className='recipe-img' src={props.imageUrl} />
      <div className="favorite-icon"><FaRegHeart /></div>
    </div>
    // <img className='recipe-box' src={props.imageUrl} />
  );
}

export default RecipeBox;