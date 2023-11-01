import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SubmissionForm( { handleSubmit, handleChange } ) {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
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
