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
        let val = response.data;
        let dataArray = [];
        for(let i=0;i<val.length;i+=4)
        {
            var page = [];
            for(let j=i;j<Math.min(val.length,i+4);j++)
            {
                page.push(val[j]);
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
