import { Link } from "react-router-dom";

const style = {
    item: {
        width: "200px",
        height: "100px",
        backgroundColor: "grey",
    }
};

function BlogDetails(props) {
    console.log(props);
    return (<div style={style.item}>
        <h2>{props.name}</h2>
        <Link to={`/blogdetail/${props.id}`}> Read more</Link>
    </div >);
}

export default BlogDetails;