import  { useState } from 'react';

const useHttp = () => {
    const [errors,setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);

    const sendRequest = async (url,method,headers,body) => {
        try{
        setIsLoading(true);
        setResult(null);
        headers['Content-Type'] = 'application/json';
        if(body){
            const res = await  fetch(url,{method, headers, body:JSON.stringify(body)});
            const data = await res.json();
            if(!res.ok){
                setErrors([...errors,data.message])
                return;
            }
            setResult(data);
        }else{
            const res = await  fetch(url,{method, headers});
            const data = await res.json();
            if(!res.ok){
                setErrors([...errors,data.message])
                return;
            }
            setResult(data);
        }
        }
        catch(err){
            setErrors([...errors,err]);
        }
        finally{
            setIsLoading(false);
        }
    }

    const clearErrors = () => {
        setErrors([]);
    }

    return {errors, isLoading, result, sendRequest, clearErrors};
}

export default useHttp;