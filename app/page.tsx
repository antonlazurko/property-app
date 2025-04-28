import Link from "next/link";

const HomePage = () => (<>
    <h1>
        Home Page
    </h1>
    <p>
        <Link href={{
            pathname: "/properties",
        }}>Go to Properties Page</Link>
    </p>
    </>);
export default HomePage;