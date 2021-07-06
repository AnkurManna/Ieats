import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,Col,FormGroup,Input,Label,Row } from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
function OrderConfirmation({logoutModal,setLogoutModal}) {

    const toggle = () => setLogoutModal(!logoutModal);
    const logout = () =>{
        const cookies = new Cookies();
        cookies.remove('userName', { path: '/' });
        cookies.remove('userid', { path: '/' });
        cookies.remove('token', { path: '/' });
        window.location.reload();
    }
    return (
        <div>
        
        
        <Modal isOpen={logoutModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Log out</ModalHeader>
        <ModalBody>
            Are you sure ? 
        </ModalBody>
            <Button color="primary"   onClick={logout}>Log out</Button>
        </Modal>

        </div>
    )
}

export default OrderConfirmation
