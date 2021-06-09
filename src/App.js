import { PropTypes } from "prop-types";

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h1-1170x1645.jpg'
  },
  {
    id: 2,
    name: 55,
    image: 'https://www.seriouseats.com/thmb/EZaQnk1yjGYVIkASseEWqtFRHyc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg'
  },
  {
    id: 3,
    name: 'coke',
    image: 'https://images.heb.com/is/image/HEBGrocery/001397056?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'
  }
]
function Food(props) {
  console.log(props.name);
  return (
    <div>
    <h1>I like {props.name}</h1>
    <img src={props.image} alt={props.name}></img>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,   //name 은 반드시 string 이여야 한다.
  image: PropTypes.string.isRequired,  //image 는 반드시 string 이여야 한다.
}

function App() {
  return (
    <div> 
      {foodILike.map(dish=>(
      <Food key={dish.id} name={dish.name} image={dish.image}/>
      ))}
    </div>
  );
}

export default App;
