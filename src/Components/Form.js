import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SubmissionForm( { setResources, resources } ) {

  const defaultFormData = {
    title: "",
    link: "",
    description: ""
  }

  const [formData, setFormData] = useState(defaultFormData)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3001/resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => setResources([...resources, data]))
    setFormData(defaultFormData)
  }

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            value={formData.title}
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            value={formData.description}
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
            placeholder="Enter description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="link">
          <Form.Label>Link:</Form.Label>
          <Form.Control
            value={formData.link}
            type="text"
            id="link"
            name="link"
            onChange={handleChange}
            placeholder="Enter link (e.g., https://www.example.com)"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default SubmissionForm
