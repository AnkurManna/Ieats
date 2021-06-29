import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
/*         <h2><span>Type: {data.cartelement.type}</span> <span>Description: {data.cartelement.description}</span> <span>Price: {data.price}</span></h2>
*/

function CartBlock(data) 
{
   
    const placeorder = () =>{
        console.log(data.data);
        const makeOrderUrl = 'http://localhost:5000/makeOrder';
        axios.post(makeOrderUrl,data.data)
        .then(response => {
            
            console.log(response.data)
        })
        .catch(e =>{
            console.log(e);
        })
    }
    console.log(data.data);
    return(
        <>
        <h2><span>Type: {data.data.cartelement.type}</span> <span>Description: {data.data.cartelement.description}</span> <span>Price: {data.data.price}</span>
        <button onClick={()=>placeorder()}>Order Now</button>
        </h2>

        </>
    )

}
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
            {cartData&&cartData.map(it=><CartBlock data={it}/>)}
        </div>
    )
}

export default Cart
