import Card from 'react-bootstrap/Card';

function Video() {

    const videoContainerStyle = {
        backgroundColor: 'white', // Change to your desired background color
        border: '1px solid gray', // 1px gray border, you can adjust the width and color
        padding: '20px', // Optional padding to add space around the content
      };

    return (
        <>
        {/* <div style={videoContainerStyle}>
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
      </div> */}

        <Card className="d-flex justify-content-between align-items-start">
        <iframe
          variant="top"
          margin="auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yml4Jf6AJOs?si=V6WhtIxp53zVD-5e"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Card.Body>
        <Card.Title>Understanding The Universal God & the 7 Noahide Laws</Card.Title>
        <Card.Text>
        This captivating talk by Rabbi Mendel Kaplan, Spiritual Leader at Chabad Flamingo and Chaplain of the York Region Police Department to a group of non-Jewish High School students, offers a rudimentary yet fascinating introduction to God, religion, and religious laws that apply to every human being.
        </Card.Text>
        </Card.Body>
        </Card>
        </>
    )
}

export default Video
