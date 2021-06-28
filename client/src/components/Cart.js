import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
function Cart() {
    const [token,setToken]=useState('');
    const [userid,setUserid] = useState('');
    const [cartData,setCartData] = useState(null);
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
        const allCartUrl = 'http://localhost:5000/cart/Carts/'+userid;
        axios.get(allCartUrl)
    .then(function (response) {
        console.log(response.data);
        let val = response.data;
        console.log(val);
        setCartData(val);
    }).catch(function (error) {
        console.log(error);
    })}
    ,[token]);
    return (
        <div>
            <h2>Cart elements</h2>
        </div>
    )
}

export default Cart
