import { Fragment, useEffect, useState } from "react"

function Test () {
    const [test, setTest] = useState("Chargement du test ...")
    
    useEffect(() => {

        fetch("http://localhost:3000/test")
        .then(res => res.json())
        .then(data => setTest(data.message))
        .catch(err => setTest("Erreur " + err.message))

    }, [])
    
    return (
        <Fragment>
            <h1>Ceci est un test</h1>
            <p>{test}</p>
        </Fragment>
    )
}

export default Test