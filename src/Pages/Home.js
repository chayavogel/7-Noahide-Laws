import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image';

function Home() {
    return (
        <>
        <div className="needsMargin">
            <h1>The Seven Noahide Laws</h1 >
            <p>A Brief Background</p>
        </div>
                <div className="needsMargin">
            <Image src="https://w2.chabad.org/media/images/1066/sTVQ10662626.jpg?_i=_n504BC99DD0473598AAE3BCDC5D75568D" rounded />
        </div>
        <div className="needsMargin">
            <p>The <Link to={"/list"}>7 Noahide Laws</Link> are for all of us to keep, regardless of who we are or where we come from. Without these seven things, it would be impossible for humanity to live together in harmony.</p>
            <p>But what are they? Where do they come from?</p>
            <p>Many, many, years ago, there was a great flood. One man and his children survived: Noah. Hence, every human being on this planet is a descendant of Noah - a Noahide.</p>
            <p>G-d gave us these seven laws so that this world would be a peaceful, kind and happy place to be.</p>
            <p>A place of humanity.</p>
            <p>If we were to fulfill these laws just because they make sense to us, then we would change them, according to our convenience. We would be our own god.</p>
            <p>But when we understand that they are the laws of a supreme G-d, we understand that they can not be changed, just as He does not change.</p>
            <p></p>
        </div>
        </>
    );
};

export default Home;
