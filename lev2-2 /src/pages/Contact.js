import blogData from "../BlogData";
import { Link } from "react-router-dom";
function Contact() {
    let A = blogData;
    return (

        <div className="asdf">
            <span className="BB">
                <img src={A[0].img_url} alt="a"></img>
                <p>{A[0].title}</p>
                <Link to="/pets">
                    <button className="Z" value={0}>
                        Pets
                    </button>
                </Link>
            </span>
            <span className="BB">
                <img src={A[1].img_url} alt="a"></img>
                <p>{A[1].title}</p>
                <Link to="/pets">
                    <button  className="Z" value={1}>
                        Pets
                    </button>
                </Link>
            </span>
            <span className="BB">
                <img src={A[2].img_url} alt="a"></img>
                <p>{A[2].title}</p>
                <Link to="/pets">
                    <button className="Z" value={2}>
                        Pets
                    </button>
                </Link>
            </span>
            <span className="BB">
                <img src={A[3].img_url} alt="a"></img>
                <p>{A[3].title}</p>
                <Link to="/pets">
                    <button >
                        Pets
                    </button>
                </Link>
            </span>
            <span className="BB">
                <img src={A[4].img_url} alt="a"></img>
                <p>{A[4].title}</p>
                <Link to="/pets">
                    <button >
                        Pets
                    </button>
                </Link>
            </span>
            <span className="BB">
                <img src={A[5].img_url} alt="a"></img>
                <p>{A[5].title}</p>
                <Link to="/pets">
                    <button >
                        Pets
                    </button>
                </Link>
            </span>
        </div>
    );
}
;


export default Contact;