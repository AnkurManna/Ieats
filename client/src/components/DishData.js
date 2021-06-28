import React,{useEffect,useState} from 'react'
import axios from 'axios';
import DishCard from './DishCard';
function DishData() {
    const [data,setdata] = useState('');
    useEffect(() => {

        
        /*var config = {
            headers: {"Authorization": getToken()}
        };*/
        const allDishUrl = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(allDishUrl)
    .then(function (response) {
        console.log(response.data);
        setdata(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
        
    }, []);
    return (
        <div>
            {data&&data.map(it=> <DishCard dish={it}/>)}
        </div>
    )
}

export default DishData
