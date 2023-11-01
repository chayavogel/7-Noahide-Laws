import { useState, useEffect } from "react"
import Resource from "./Resource"
import ListGroup from 'react-bootstrap/ListGroup';

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
        <h1>Resources</h1>
        <p>Want to know more? Check out these articles and the video below!</p>

        <div>
          <h3>Understanding The Universal God & the 7 Noahide Laws</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yml4Jf6AJOs?si=V6WhtIxp53zVD-5e"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p>
            This captivating talk by Rabbi Mendel Kaplan, Spiritual Leader at Chabad Flamingo and Chaplain of the York Region Police Department to a group of non-Jewish High School students, offers a rudimentary yet fascinating introduction to God, religion, and religious laws that apply to every human being.
          </p>
        </div>

        <div>
          <ListGroup as="ol" numbered>
            {resources.map(resource => <Resource key={resource.id} resource={resource} />)}
            </ListGroup>
        </div>

        <div>
        <form onSubmit={handleSubmit}>
          <h3>Submit a Resource</h3>
          <p>Have an article to share? Post it here!</p>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" onChange={handleChange}/><br/>
          <label htmlFor="title">Description:</label>
          <input type="text" id="description" name="description" onChange={handleChange}/><br/>
          <label htmlFor="link">Link:</label>
          <input type="text" id="link" name="link" onChange={handleChange}/><br/>
          <input type="submit" value="Submit"/>
        </form>
        </div>

      </>
    );
  }

export default Resources;
