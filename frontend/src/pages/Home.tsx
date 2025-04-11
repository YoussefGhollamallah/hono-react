import { Fragment, useEffect, useState } from "react";
import { fetchHello } from "../api/api";

function Home() {
    const [message, setMessage] = useState("Chargement des données ...")

    useEffect(() => {

        fetchHello()
        .then(setMessage)
        .catch((err: { message: string; }) => setMessage("erreur : " + err.message))
    }, [])

    return (
        <Fragment>
            <h1>Bienvenue sur la page message</h1>
            <p>{message}</p>
        </Fragment>
    )
}

export default Home;