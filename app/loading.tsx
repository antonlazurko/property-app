'use client'
import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "100px auto"
}

const LoadingPage = () => (
    <ClipLoader
        color="#3d82f6"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"/>
)

export default LoadingPage;