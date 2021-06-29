import React,{useEffect,useState} from 'react'
import axios from 'axios';
import DishCard from './DishCard';
function DishData() {
    const [data,setdata] = useState('');
    useEffect(() => {

        
        /*var config = {
            headers: {"Authorization": getToken()}
        };*/
        //const allDishUrl = 'https://jsonplaceholder.typicode.com/posts';
        const allDishUrl = 'http://localhost:5000/dish/findallDishes';
        axios.get(allDishUrl)
    .then(function (response) {
        console.log(response.data);
        let val = response.data;
        let dataArray = [];
        for(let i=0;i<3;i+=4)
        {
            var page = [];
            for(let j=i;j<Math.max(val.length,i+4);j++)
            {
                page.push(val[0]);
            }
            dataArray.push(page)
        }
        console.log(dataArray);
        setdata(dataArray);

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
