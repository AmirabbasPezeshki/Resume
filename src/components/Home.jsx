import BlogList from "./BlogList";
import '../styles/Home.css'
import useFetch from "../hook/useFetch";
const Home = () => {
    
    const {data : blog,error,pending : loading} = useFetch('http://localhost:8000/blogs')
    
    return (<>
        <div className="home">
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div> }
            {blog && <BlogList blog={blog}/>}
        </div>
    </>);
}
 
export default Home;