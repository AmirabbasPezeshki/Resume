import { useEffect , useState} from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null)
    const [pending,setPending] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{

        const abortControler = new AbortController()

        setTimeout(() => {
            fetch(url , {signal:abortControler.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error("Faild to Fetch :( Error 404")
                }
                return res.json()
            })
            .then(data =>{
                setData(data)
                setPending(false)
                setError(null)
            })
            .catch(err =>{
                if(err.name === "AbortError"){
                    console.log('fetch aborted')
                }else{
                    setError(err.message)
                    setPending(false)
                }
            })
        }, 1000);
        return () => abortControler.abort()
    },[url])
    
    return {data,error,pending}
}
 
export default useFetch;