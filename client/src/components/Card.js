
import React from 'react';
import styles from '../myStyles.module.css';
import axios from 'axios';
import {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Card = ({ck,val,people}) => {
  const [dish,setdish] = useState({description:'',type:'',rating:0,poplarity:0,cost:0,discount:0,keywords:[]});
  const [showUpdateForm,setShowUpdateForm] = useState(false);
    const instance = axios.create({
        withCredentials: true
      })
    
    const del = (id) =>{
        console.log(id);
        let apiUrl = 'http://localhost:8081/admin/item/deleteitem/';
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
        setdish(val);
        update(id);
        setShowUpdateForm(!showUpdateForm);
    }
    const update = (id) =>{
    
      let apiUrl = 'https://localhost:8443/admin/item/updateItem/';
      console.log(dish);
      apiUrl = apiUrl + id;
      instance.put(apiUrl,dish)
      .then((response)=>console.log(response))
      .catch(error =>{console.log(error)})
    }
  return (
    <div className={styles.bar}>
    
    <span  className={styles.info}>description : {val.description}</span>
    <span  className={styles.info}>Type : {val.type}</span>
    <span  className={styles.info}>cost : ₹{val.cost}</span>
    <span  className={styles.info}>rating: {val.rating}</span>
    <span  className={styles.info}>popularity: {val.popularity}</span>
    <span  className={styles.info}>Discount : {val.discount}</span>

    {people==='User'?<span><button className={styles.mybtn}>Order</button></span>:<span  ><button className={styles.mybtn} onClick={()=>upd(val)}>Update</button>
    <button className={styles.mybtn} onClick={()=>del(val.id)}>Delete</button></span>}
    {showUpdateForm?
    <div>
      
      <Modal isOpen={showUpdateForm} >
          <form>
            <div className='form-control'>
                <label>Description</label>
                <input type='text' placeholder='description'  value={dish.description} onChange={(e)=>setdish({...dish,description:e.target.value})}/>
            </div>

            <div className='form-control'>
                <label>Type</label>
                <input type='text' placeholder='type' value={dish.type}  onChange={(e)=>setdish({...dish,type:e.target.value})}/>
            </div>

            <div className='form-control'>
                <label>Cost</label>
                <input type='text' placeholder='Cost' value={dish.cost} onChange={(e)=>setdish({...dish,cost:e.target.value})}/>
            </div>

            <div className='form-control'>
                <label>Rating</label>
                <input type='text' placeholder='Rating' value={dish.rating} onChange={(e)=>setdish({...dish,rating:e.target.value})}/>
            </div>

            <div className='form-control'>
                <label>Discount</label>
                <input type='text' placeholder='Discount' value={dish.discount} onChange={(e)=>setdish({...dish,discount:e.target.value})}/>
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
