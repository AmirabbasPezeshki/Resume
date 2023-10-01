import '../styles/BlogList.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const BlogList = ({blog}) => {
    return (<>
            {blog.map(item => (
                <Link key={item.id} className="link" to={`/blogs/${item.id}`}>
                    <div className="blog">
                    <h3>{item.text.toUpperCase()}</h3>
                    <h5>{item.by}</h5>
                    <h6>{item.movie}, {item.releaseDate}</h6>
                    </div>
                </Link>
            ))}
    </>);
}
 
export default BlogList;