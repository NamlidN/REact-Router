


import blogData from "../BlogData";



function Pets() {
    const A = blogData;
let O = 0
 let F = document.getElementsByClassName('Z').value

let R = O + F

    
    return (
        <div className="asdfF">
        
            <span className="BB">
                <p>{A[R].title}</p>
                <img src={A[R].img_url} alt="a"></img>
                <p>{A[R].description}</p>
            </span>
        </div>
    );
}

export default Pets;
