import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({name, auther, genre, publicDate, id}) => {
    return(
        <div className = 'CardBody' >
            <div className = 'CardBodyHeader' > {name} </div>
            <div className = 'CardBodyInfo' >
                <div className = 'CardBodyInfoRow' >
                    <p> Auther: <span className ='CardSpecialInfo' >{auther}</span> </p>
                </div>
                <div className = 'CardBodyInfoRow' >
                    <p> Genre: <span className ='CardSpecialInfo' >{genre}</span> </p>
                </div>
                <div className = 'CardBodyInfoRow' >
                    <p> Date: <span className ='CardSpecialInfo' >{publicDate}</span> </p>
                </div>
            </div>
            <div className = 'CardBodyBtns' >
                <Link className = 'CardBodyBtn' to = {`/${id}`} >Go To</Link>
            </div>
        </div>
    );
}

export default Card;