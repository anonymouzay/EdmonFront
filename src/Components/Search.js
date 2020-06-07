import React, {useState, useEffect} from 'react';
import useHttp from '../Hooks/useHttp';
import loading from '../loading.gif';
import Card from './Card';

const Search = () => {
    const {errors, isLoading, result, sendRequest, clearErrors} = useHttp();

    const [data, setData] = useState(null);

    useEffect(() => {
        sendRequest('/Book', 'GET', {});
    },[])

    useEffect(() => {
        setData(result);
    },[isLoading]);

    const changeHandler = (e) => {
        sendRequest(`/Book/Bookname/${e.target.value}`, 'GET', {});
    }

    return(
        <div>
            <div className = 'SearchWrapper' >
                <div className = 'SearchInner' >
                    <input className = 'Search' type = 'text' placeholder = 'Enter Book Name' onChange = {changeHandler} ></input>
                </div>
            </div>
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
        </div>
    );
}

export default Search;