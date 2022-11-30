
import { useParams } from "react-router-dom";

const profiles = {
    jannik: {
        firstName: "Asdf",
        lastName: "aSdF"
    },
    manuel: {
        firstName: "fdsa",
        lastName: "FdsA"
    }
}

function Profile() {
    // Mit useParams können wir uns den dynamischen pfad aus der url geben lassen
    // useParams gibt ein javascript objekt zurück, dass uns zugriff auf die Anteile der Route gibt
    // z.B. { name: "jannik" }
    const params = useParams();

    const profile = profiles[params.name];

    return (
        <div>
            <p>{profile.firstName}</p>
            <p>{profile.lastName}</p>
        </div>
    );
}

export default Profile;