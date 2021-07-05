import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const AlertBox = ({message,alertVisible,setAlertVisible}) => {
  

  const onDismiss = () => setAlertVisible(false);

  return (
    <Alert color="info" isOpen={alertVisible} toggle={onDismiss}>
      {message}
    </Alert>
  );
}

export default AlertBox;
