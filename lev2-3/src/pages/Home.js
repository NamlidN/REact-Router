import CarDetails from '../CarDetails';
import BlogItem from '../components/BlogItem/BlogItem';


const style = {
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",

    }
};
function Home() {
    return (
        <div style={style.wrapper}>
            {CarDetails.map((car) => {
                return (
                    <BlogItem name={car.CarMake} id={car.id} />
                );
            })}
        </div>
    );

}

export default Home;