import useFetch from '../hook/useFetch'
import '../styles/BlogDetails.css'
import {useHistory , useParams} from 'react-router-dom'
const BlogDetails = () => {
    const { id } = useParams()
    const {data , error , pending} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id , {
            method : "DELETE",
        }).then(() => {
            history.push('/')
        })
    }
    return (<>
        <div className="blog-details">
            {pending && <div>Loading...</div>}
            {error && <div>Error</div>}
            {data && <article>
                <h2>{data.text}</h2>
                <h5>{data.by}</h5>
                <p>Dialogue number : {data.id}</p>
                <button className="details-btn" onClick={handleClick}>Delete</button>
            </article>}
        </div>
    </>);
}
 
export default BlogDetails;