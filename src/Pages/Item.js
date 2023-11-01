import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item( { law, updateCommitments } ) {

    function handleClick() {
        updateCommitments(law.id, law.commitments)
    }

    return (
        <Card style={{ width: '18rem' }} className="needsMargin">
        <Card.Img variant="top" src={law.image} />
        <Card.Body>
            <Card.Title>{law.id}: {law.name}</Card.Title>
            <Card.Text>{law.body}</Card.Text>
            <Button onClick={handleClick} variant="primary">Commitments: {law.commitments}</Button>
        </Card.Body>
        </Card>
    );
}

export default Item
