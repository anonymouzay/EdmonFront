import React, {useState, useEffect} from 'react';
import useHttp from '../Hooks/useHttp';
import loading from '../loading.gif';
import Form from '../Components/Form';

const Book = (props) => {
    const {errors, isLoading, result, sendRequest, clearErrors} = useHttp();
    const id = window.location.pathname;
    const [data,setData] = useState(null);

    useEffect(() => {
       sendRequest(`/Book${id}`, 'GET', {});
    }, [])

    useEffect(() => {
        setData(result)
        console.log(result)
    },[isLoading])

    return(
        <>
        {!isLoading && data?
        <div className = 'BookWrapper' >
            <div className = 'CardBodyHeader BookBodyHeader' > {data.name} </div>
            <div className = 'BookInfo' >
                <div className = 'FormWrapper' ><Form></Form></div>
                <div className = 'BookInfoWrapper'>
                    <div className = 'CardBodyInfoRow' >
                        <p> Auther: <span className ='CardSpecialInfo' >{data.author}</span> </p>
                    </div>
                    <div className = 'CardBodyInfoRow' >
                        <p> Genre: <span className ='CardSpecialInfo' >{data.genre}</span> </p>
                    </div>
                    <div className = 'CardBodyInfoRow' >
                        <p> Date: <span className ='CardSpecialInfo' >{data.publicdate}</span> </p>
                    </div>
                </div>
            </div>
        </div>:
        <div className = 'LoadingCont' >
            <div className = 'LoadingInner' > <img src = {loading} alt = 'You cant see images' className = 'generalImg'  /> </div>
        </div>}
        </>
    );
}

export default Book;