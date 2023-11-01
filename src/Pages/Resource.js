import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Resource( {resource} ) {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            >
            <div className="ms-2 me-auto">
            <div className="fw-bold">{resource.title}</div>
            {resource.description}
            </div>
            <a href={resource.link} target="_blank">
            <Badge bg="primary" pill>
            Click Here
            </Badge>
            </a>
        </ListGroup.Item>
    )
}

export default Resource
