import { useState, useEffect } from "react"
import Resource from "./Resource"
import ListGroup from 'react-bootstrap/ListGroup';
import Video from "./Video"
import SubmissionForm from "./Form"

function Resources() {

    const [resources, setResources] = useState([])
    const [formData, setFormData] = useState({
      title: "",
      link: "",
      description: ""
    })

    useEffect(()=> {
      fetch("http://localhost:3001/resources")
      .then(r => r.json())
      .then(data => setResources(data))
    }, [])

    function handleChange(e) {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
      e.preventDefault()
      setResources([...resources, formData])
      fetch("http://localhost:3001/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
    }

    return (
      <>
      <div className="needsMargin">
        <h1>Resources</h1>
        <p>Want to know more? Check out these articles and the video below!</p>
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
        <SubmissionForm handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>

      </>
    );
  }

export default Resources;
