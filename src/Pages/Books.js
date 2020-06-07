import React, {useState, useEffect} from 'react';
import useHttp from '../Hooks/useHttp';
import loading from '../loading.gif';
import Card from '../Components/Card';

const Books = () => {
    const {errors, isLoading, result, sendRequest, clearErrors} = useHttp();

    const [data,setData] = useState(null);

    useEffect(() => {
        sendRequest('/Book', 'GET', {});
    },[])
    useEffect(() => {
        setData(result);
    },[isLoading])

    return(
        <div className = 'BooksBody' >
            <div className = 'BooksBodyTitleCont' >
                <h3 className = 'BooksBodyTitle' >Aveilable books</h3>
            </div>
            {!isLoading && data ?
            <div className = 'BooksCont' >{data.map((i, index)=>{return ( <Card id = {i.id} publicDate = {i.publicdate} genre = {i.genre} auther = {i.author} name = {i.name} key = {index} ></Card> );})}</div>:
            <div className = 'LoadingCont' >
                <div className = 'LoadingInner' > <img src = {loading} alt = 'You cant see images' className = 'generalImg'  /> </div>
            </div>}
        </div>
    );
}

export default Books;