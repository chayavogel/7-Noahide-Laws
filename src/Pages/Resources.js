import { useState, useEffect } from "react"
import Resource from "../Components/Resource"
import ListGroup from 'react-bootstrap/ListGroup';
import Video from "../Components/Video"
import SubmissionForm from "../Components/Form"

function Resources() {

    const [resources, setResources] = useState([])

    useEffect(()=> {
      fetch("http://localhost:3001/resources")
      .then(r => r.json())
      .then(data => setResources(data))
    }, [])

    return (
      <>
      <div className="needsMargin">
        <h1>Resources</h1>
        <p>Want to know more?</p>
      </div>

      <div className="needsMargin">
        <Video />
      </div>

      <div className="needsMargin">
        <ListGroup as="ol" numbered>
          <h3>External Links</h3>
          {resources.map(resource => <Resource key={resource.id} resource={resource} />)}
        </ListGroup>
      </div>

      <div className="needsMargin">
        <h3>Submit a Resource</h3>
        <p>Have an article to share? Post it here!</p>
        <SubmissionForm resources={resources} setResources={setResources}/>
      </div>
      </>
    );
  }

export default Resources;
