import React,{useEffect,useState} from 'react'
import Cookies from 'universal-cookie';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';
import style from '../myStyles2.module.css';
function OrderBlock(data)
{
    const cancelOrder = () => {
        const deleteOrderUrl = 'http://localhost:5000/orders/deleteOrder/'+ data.dish.orderid;
        axios.get(deleteOrderUrl).then(res=> {console.log(res); window.location.reload()}).catch(err=> console.log(err));
    }
    //console.log(data.dish.orderid);
    return(
        <>
        <ListGroupItem className={style.centerText}><span className={style.orderText}>Type: {data.dish.type}</span>
        <span className={style.orderText}>Description: {data.dish.description}</span> 
        <span className={style.orderText}>Price: {data.dish.amount}</span>
        <span className={style.orderText}>Time: {data.dish.time}</span>
        <Button onClick={cancelOrder}>Cancel</Button>
        </ListGroupItem>
        

        </>
    )
}
function Orders() {
    const [token,setToken]=useState('');
    const [userid,setUserid] = useState('');
    const [orderData,setOrderData] = useState(null);
    const getToken = () => {
        const cookies = new Cookies();
        return cookies.get("token");
    }
    useEffect(()=>{
        const cookies = new Cookies();
        //console.log("again");
        setToken(cookies.get("token"));
        setUserid(cookies.get("userid"));

                
        var config = {
            headers: {"Authorization": getToken()}
        };
        const allOrderUrl = 'http://localhost:5000/orders/'+userid;
        axios.get(allOrderUrl)
    .then(function (response) {
        console.log(response.data);
        let val = response.data;
        
        
        console.log(val);
        setOrderData(val);
    }).catch(function (error) {
        console.log(error);
    })}
    ,[token]);
    return (
        <div>
            <ListGroup>
                {orderData&&orderData.map(it=><OrderBlock dish={it}/>)}
            </ListGroup>
        </div>
    )
}

export default Orders;
