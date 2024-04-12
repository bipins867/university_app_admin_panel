import React, { useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import globalController from "../../GlobalController";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  const history = useHistory();
  const [count, setCount] = useState(0);
  // State for ImageSlides
  const [imageSlides, setImageSlides] = useState([]);
  const [imageSlideFormData, setImageSlideFormData] = useState({
    key: "",
    imageUrl: null,
  });

  // State for Leaders
  const [leaders, setLeaders] = useState([]);
  const [leaderFormData, setLeaderFormData] = useState({
    name: "",
    subTitle: "",
    profilePic: null,
  });

  useEffect(() => {
    globalController
      .getData("home/get/leaders", {})
      .then((result) => {
        setLeaders(result.leaders);
      })
      .catch((e) => {
        alert(e);
      });
    globalController
      .getData("home/get/homeImages", {})
      .then((result) => {
        setImageSlides(result.homeImages);
      })
      .catch((e) => {
        alert(e);
      });
  }, [count]);

  // Function to handle input change for ImageSlide form
  const handleImageSlideFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageUrl") {
      setImageSlideFormData({ ...imageSlideFormData, [name]: files[0] });
    } else {
      setImageSlideFormData({ ...imageSlideFormData, [name]: value });
    }
  };

  // Function to handle form submission for ImageSlide
  const handleImageSlideFormSubmit = (e) => {
    const info = imageSlideFormData;
    e.preventDefault();

    const fileFormData = new FormData();

    for (const key in info) {
      fileFormData.append(key, info[key]);
    }

    globalController
      .postData("home/create/addHomeImage", fileFormData, {})
      .then((data) => {
        setCount(count + 1);
        setLeaderFormData({
          key: "",
          imageUrl: null,
          forType: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeleteImageSlide = (id) => {
    globalController
      .postData("home/delete/imageSlide", { imageSlideId: id }, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Function to handle input change for Leader form
  const handleLeaderFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      setLeaderFormData({ ...leaderFormData, [name]: files[0] });
    } else {
      setLeaderFormData({ ...leaderFormData, [name]: value });
    }
  };

  const handleDeleteLeader = (id) => {
    globalController
      .postData("home/delete/leader", { leaderId: id }, {})
      .then((data) => {
        setCount(count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to handle form submission for Leader
  const handleLeaderFormSubmit = (e) => {
    const info = leaderFormData;
    e.preventDefault();

    const fileFormData = new FormData();

    for (const key in info) {
      fileFormData.append(key, info[key]);
    }

    globalController
      .postData("home/create/addLeader", fileFormData, {})
      .then((data) => {
        setCount(count + 1);
        setLeaderFormData({
          name: "",
          subTitle: "",
          message: "",
          profilePic: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="mt-5">
      <h2>Home Page</h2>

      {/* ImageSlides Section */}
      <div>
        <h3>ImageSlides</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Key</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {imageSlides.map((slide) => (
              <tr key={slide.id}>
                <td>{slide.id}</td>
                <td>{slide.key}</td>

                <td>
                  <Button
                    variant="info"
                    onClick={() => {
                      window.open(slide.imageUrl);
                    }}
                  >
                    View
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteImageSlide(slide.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* Add ImageSlide form */}
        <Form onSubmit={handleImageSlideFormSubmit}>
          <Form.Group controlId="key">
            <Form.Label>Key</Form.Label>
            <Form.Control
              type="text"
              name="key"
              value={imageSlideFormData.key}
              onChange={handleImageSlideFormChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="imageUrl">
            <Form.Label>Input Image</Form.Label>
            <Form.Control
              type="file"
              name="imageUrl"
              onChange={handleImageSlideFormChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add ImageSlide
          </Button>
        </Form>
      </div>

      {/* Leaders Section */}
      <div>
        <h3>Leaders</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Sub Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader) => (
              <tr key={leader.id}>
                <td>{leader.id}</td>
                <td>{leader.name}</td>
                <td>{leader.subTitle}</td>
                <td>
                  <Button variant="info">Edit</Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteLeader(leader.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Form onSubmit={handleLeaderFormSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={leaderFormData.name}
              onChange={handleLeaderFormChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="subTitle">
            <Form.Label>Sub Title</Form.Label>
            <Form.Control
              type="text"
              name="subTitle"
              value={leaderFormData.subTitle}
              onChange={handleLeaderFormChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="profilePic">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="profilePic"
              onChange={handleLeaderFormChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Leader
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default HomePage;
