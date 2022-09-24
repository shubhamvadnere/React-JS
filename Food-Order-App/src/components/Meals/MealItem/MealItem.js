import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`; // tofixed(2) is for rendering upto 2 decimal places

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    );
};

export default MealItem;