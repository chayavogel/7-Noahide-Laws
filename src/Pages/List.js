import { useState, useEffect } from "react"
import Item from "../Components/Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function List() {

    const [laws, setLaws] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/laws")
        .then(r => r.json())
        .then(data => setLaws(data))
    }, [])

    function updateCommitments(id, commitments){

        fetch(`http://localhost:3001/laws/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
          body: JSON.stringify({
                "commitments": commitments+1
            })
        })
        .then(r => r.json())
        .then((data) => {
            const updatedLaws = laws.map(law => {
                if (law.id === id) {
                    return data;
                } else {
                    return law;
                }
            });
            setLaws(updatedLaws);
        })
    }

    return (
        <>
        <div className="needsMargin">
            <h1>Laws</h1 >
            <p>The Seven</p>
        </div>
        <Container className="needsMargin">
            <Row>
            {laws.map(law => <Item key={law.id} law={law} updateCommitments={updateCommitments}/>)}
            </Row>
        </Container>
        </>
    )
}

export default List;
