import React from 'react';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';

function toasterComp() {
    

        return (
            <div>
                <p onClick={()=>toastr.success('Success Message', 'Title', {displayDuration:3000})}>Show Success Message</p>
                <p onClick={()=>toastr.info('Info Message', '', {displayDuration:0})}>Show Info Message</p>
                <p onClick={()=>toastr.error('Error Message', 'Title')}>Show Error Message</p>
                <p onClick={()=>toastr.warning('Success Message', '', {width:'600px'})}>Show Warning Message</p>
            </div>
        );
    
}

export default toasterComp;
