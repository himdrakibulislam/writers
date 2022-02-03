import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './writer-details.css'
const WritersDetails = (props) => {
    const element = <FontAwesomeIcon icon={faPencilAlt}/>
    const {name,writerImage,maxEstimatedSales,died,born,books} = props.writers;
    return (
        <div className='col-4 border border-success rounded-3 cart-design '>
            <div className='text-center'>
                <img className='img-fluid rounded-circle detr img-css m-3' src={writerImage} alt=''/>
            </div>
            <div className="m-0 p-0">
                <h5>Name : {name}</h5>
                <p><b>Born</b>:{born}</p>
                <p><b>Max Estimated Salses</b>:{maxEstimatedSales}</p>
                <p><b>Books</b>:{books}</p>
                <p><b>Died</b>:{died}</p>
                <button onClick={()=>props.details(props.writers)} className='btn btn-outline-primary mb-3' > {element} See Details</button>
            </div>
        </div>
    );
};

export default WritersDetails;