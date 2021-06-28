import React,{useEffect,useState} from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
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
        console.log("again");
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
            <h2>Orders</h2>
        </div>
    )
}

export default Orders;
