import { useState } from 'react';
import '../styles/AddDialogue.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


const AddDialogue = () => {

    const [text,setText] = useState("")
    const [by,setBy] = useState("")
    const [movie,setMovie] = useState("")
    const [releaseDate,setReleaseDate] = useState("")
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const dialogueInformation = {text , by , movie , releaseDate}
        setIsPending(true)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs' , {
            method :"POST",
            headers :{"Content-Type":"application/json"},
            body:JSON.stringify(dialogueInformation)
            }).then( () =>{
                console.log("new Blog Added")
                setIsPending(false)
                history.push('/')
            })
        }, 2000);
    }

    return (<>
        <div className='addDialogue'>
            <h2>Add Dialogue</h2>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>Text :</label> 
                    <input value={text} onChange={ e => setText(e.target.value)} type="text" required/>
                    <label>By :</label>
                    <input value={by} onChange={e => setBy(e.target.value)} type="text" required/>
                    <label>Movie :</label>
                    <input value={movie} onChange={e => setMovie(e.target.value)} type="text" required/>
                    <label>Release Date :</label>
                    <input value={releaseDate} onChange={e => setReleaseDate(e.target.value)} type="number" required/>
                    {!isPending && <button className='submit__btn'>Submit</button>}
                    {isPending && <button disabled className='submit__btn'>Adding...</button>}
                </form>
            </div>
        </div>
    </>);
}
 
export default AddDialogue;