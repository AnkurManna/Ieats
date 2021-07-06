import React ,{useState}from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import styles from '../myStyles2.module.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
    } from 'reactstrap';

const DishBlock = ({dish}) => {
    
    const [dishVal,setDishVal] = useState(dish);
    const addinCart = () =>
    {
        const ck = new Cookies();
        const userid = ck.get("userid");
        const cartData = { cartelement:{type:dishVal.type,description:dishVal.description},userid:userid,price:dishVal.cost};
        const cartDataUrl = 'http://localhost:5000/cart/addincart';
        axios.post(cartDataUrl,cartData)
        .then(response => {
            console.log(response.data)  
            window.location.reload();
        })
        .catch(e =>{
            console.log(e);
        })

    }
return (
<div className={styles.dishBlock}>
    <Card>
        <CardImg top width="100%" src="" alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{dish.type + dish.description}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Rating : {dish.rating} Price : {dish.cost}</CardSubtitle>
                <CardText>{dish.keywords&&dish.keywords.map(it=><span>{it}</span>)}</CardText>
            <Button onClick={()=>addinCart()}>Add to cart</Button>
        </CardBody>
    </Card>
</div>
);
};

    export default DishBlock;