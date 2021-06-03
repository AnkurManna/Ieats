
import React from 'react';

import styles from '../myStyles.module.css';
import axios from 'axios';
import {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Card = ({ck,val,people}) => {

    const [brand ,setbrand] = useState('');
    const [type, settype] = useState('');
    const [price, setprice] = useState('');
    const [gender, setgender] = useState('');
    const [currentdiscount, setcurrentdiscount] = useState('');
    const [updvisibility,setupdvisibility] = useState(false);
    const [discountduration,setdiscountduration]=useState('');
    const [arrivaldate,setarrivaldate]=useState('');
    const [newarrival,setnewarrival] = useState(false);
    const instance = axios.create({
        withCredentials: true
      })
    const del = (id) =>{
        console.log(id);
        let apiUrl = 'https://localhost:8443/admin/item/deleteitem/';
        apiUrl = apiUrl+id;
        instance.delete(apiUrl)
        .then(res=>{
            console.log(res)
        })
        .catch(e=>{
            console.log(e);
        })
    }
   
      
    const upd = (id) => {
        setupdvisibility(!updvisibility);
        setprice(val.price);
        settype(val.type);
        setgender(val.gender);
        setbrand(val.starbrand);
        setcurrentdiscount(val.currentdiscount);
        setdiscountduration(val.discountduration);
        setarrivaldate(val.arrivaldate);
        setnewarrival(val.newarrival);
        update(id);
    }
    const update = (id) =>{
        let val = {id:id,brand:brand,type:type,gender:gender,currentdiscount:currentdiscount,discountduration:discountduration,price:price,newarrival:newarrival,arrivaldate:arrivaldate};
        let apiUrl = 'https://localhost:8443/admin/item/updateItem/';
        console.log(val);
      apiUrl = apiUrl + id;
      instance.put(apiUrl,val)
      .then((response)=>console.log(response))
      .catch(e=>{console.log(e)})
    }
  return (
    <div className={styles.bar}>
    
    <span  className={styles.info}>Brand : {val.brand}</span>
    <span  className={styles.info}>Type : {val.type}</span>
    <span  className={styles.info}>Price : ₹{val.price}</span>
    <span  className={styles.info}>Gender: {val.gender}</span>
    <span  className={styles.info}>Current Discount: {val.currentdiscount}</span>
    <span  className={styles.info}>Discount Duration: {val.discountduration}</span>

    {people==='User'?<span><button className={styles.mybtn}>Book</button></span>:<span  ><button className={styles.mybtn} onClick={()=>upd(val)}>Update</button>
    <button className={styles.mybtn} onClick={()=>del(val.id)}>Delete</button></span>}
    {updvisibility?
    <div>
      
      <Modal isOpen={updvisibility} >
          <form>
      <div className='form-control'>
            <label>type</label>
            <input type='text' placeholder='type'  value={type} onChange={(e)=>settype(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>brand</label>
            <input type='text' placeholder='brand' value={brand}  onChange={(e)=>setbrand(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Gender</label>
            <input type='text' placeholder='Gender' value={gender} onChange={(e)=>setgender(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Price</label>
            <input type='text' placeholder='Gender' value={price} onChange={(e)=>setprice(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Current Discount</label>
            <input type='text' placeholder='Gender' value={currentdiscount} onChange={(e)=>setcurrentdiscount(e.target.value)}/>
        </div>

        
        
        <ModalFooter>
          <Button color="primary" onClick={update(val.id)}>update</Button>{' '}
          <Button color="secondary" onClick={upd}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal>
    </div>:''}

      
    </div>
  );

};



export default Card;
