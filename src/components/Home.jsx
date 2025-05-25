import '../styles/home.css';
import ProfileImg from '../assets/profile_image.png';
import { Container,Form,Button, Row, Col, Card,Alert } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import projects from '../Project/project';
import { FaCheckCircle  } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import React, { useRef,useState  } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Footer from '../Section/Footer.jsx'
import profile from '../assets/profile_image.png'

const customIcon = new L.Icon({
  iconUrl: profile, // Place your marker image in public/
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

function Home() {
const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_abb0bpn",
      "template_f7xm0ao",
      form.current,
      "G9spE_M2tyG68eQI5"
    ).then(
      (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send. Please try again later.");
          console.error(error.text);
        })
  };
    return (
    <div className="shadow-wrapper concentric-background pt-2 text-light d-flex flex-column justify-content-center align-items-center">
      {/* Navigation bar */}
      <nav className=" d-flex justify-content-center">
        <div className="Custom_nav">
          <ul className="navbar-nav flex-row gap-2">
            <li className="cus_li nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="cus_li nav-item"><NavLink to='/project' className="nav-link text-white" >Projects</NavLink></li>
            <li className="cus_li nav-item"><a className="nav-link text-white" target='_blank' href="https://drive.google.com/file/d/1LQvr7C-nLJco2Pi1OI517RsYxkimM7Kh/view?usp=sharing">Resume</a></li>
            <li className="cus_li nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* Header portion */}
      <header className="flex-grow-1 d-flex align-items-center justify-content-center text-center z-1">
        <div className="container px-3 pt-0 pt-md-5 mt-5 mt-md-5">
          <div>
            <img
              src={ProfileImg}
              alt="avatar"
              style={{ width: '200px', height: '200px' }}
            />
          </div>
          <div className="active badge mb-2">
            <span className='circle me-3'></span>
           Available for work
          </div>
          <h1 className="display-5 fw-bold mt-2 mb-2">Deepshik :)</h1>
          <p className="contend">
           Bringing ideas to life on screen . Fueled by code, coffee, <br /> and catchy tunes.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
            <a href="#pro" className='ab button1 btn btn-outline-light' style={{textDecoration:"none",color:'white'}}> Explore My Projects ⬇️</a>
            <a className="button2 border rounded" style={{textDecoration:"none" ,color:'black'}} target='_blank' href='https://www.linkedin.com/in/deepshik-m/'>👋 Let's Connect</a>
          </div>
        </div>
      </header>
      {/* about us  */}
      <div className='about1 container d-flex flex-row justify-content-center'>
        <div>
          <h6 className='aboutus'>about</h6>
          <h1 className='head' style={{textAlign:'center',lineHeight:'50px'}}>What I'm All</h1>
          <p className="text-center contend">
          Fueled by passion, powered by HTML, CSS, JavaScript & React <br /> — I build experiences, not just websites.
          </p>
        </div>
      </div>
      <Container fluid className="py-4 px-3">
        <Row className="g-4">
          <Col md={5}>
            <Card className="custom-card" style={{height:"100%"}}>
              <Card.Body>
                <Card.Title className="gradient-title">✨ My Toolkit</Card.Title>
                <Card.Text className="subtitle">
                  The tools I rely on to design and develop projects.
                </Card.Text>
                <div className="tool-icons mt-3 d-flex flex-wrap gap-2">
                  <span className="tool-badge d-flex align-items-center">
                    <img src="/src/assets/wix.png" alt="wix" className="tool-icon" />
                    Wix
                  </span>
                  <span className="tool-badge d-flex align-items-center">
                    <img src="/src/assets/canva.png" alt="canva" className="tool-icon" />
                    Canva
                  </span>
                  <span className="tool-badge d-flex align-items-center">
                    <img src="/src/assets/figma.png" alt="figma" className="tool-icon" />
                    Figma
                  </span>
                  <span className="tool-badge d-flex align-items-center">
                    <img src="/src/assets/visual.png" alt="vs code" className="tool-icon" />
                    VS code
                  </span>
                  <span className="tool-badge d-flex align-items-center">
                    <img src="/src/assets/github-sign.png" alt="github" className="tool-icon" />
                    Git/Github
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="custom-card h-100 ms-0 ms-md-3">
              <Card.Body>
                <Card.Title className="gradient-title">✨ Tech Stack</Card.Title>
                <Card.Text className="subtitle">
                  Languages used to build the logic and structure of my projects.
                </Card.Text>
                  <div className="tool-icons mt-3 d-flex flex-wrap gap-2">
                    <span className="tool-badge d-flex align-items-center">
                      <img src="/src/assets/html-5.png" alt="html" className="tool-icon" />
                      HTML5
                    </span>
                    <span className="tool-badge d-flex align-items-center">
                      <img src="/src/assets/css.png" alt="css" className="tool-icon" />
                      CSS3
                    </span>
                    <span className="tool-badge d-flex align-items-center">
                      <img src="/src/assets/bootstrap.png" alt="bootstrap" className="tool-icon" />
                      Bootstrap
                    </span>
                    <span className="tool-badge d-flex align-items-center">
                      <img src="/src/assets/js.png" alt="Javascript" className="tool-icon" />
                      JavaScript
                    </span>
                    <span className="tool-badge d-flex align-items-center">
                      <img src="/src/assets/physics.png" alt="react" className="tool-icon" />
                      React
                    </span>
                    <span className="tool-badge d-flex align-items-center">
                      <img src="/src/assets/node.png" alt="nodejs" className="tool-icon" />
                      Node Js
                    </span>
                    <span className="tool-badge d-flex align-items-center">
                      <img src="/src/assets/mongodb.png" alt="mongodb" className="tool-icon" />
                      MongoDB
                    </span>
                    <span className="tool-badge d-flex align-items-center">
                      <img src="/src/assets/python.png" alt="python" className="tool-icon" />
                      Python
                    </span>
                  </div>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        <Row className="align-items-stretch mt-4">
          <Col md={8}>
            <Card className="custom-card h-100">
              <Card.Body>
                <Card.Title className="gradient-title">💡 Goals & Learning Path</Card.Title>
                <Card.Text className="subtitle">
                  I'm always learning and growing — here’s what I’m exploring now and what’s next.
                </Card.Text>
                <div className="learning-grid mt-3">
                  <div className="learning-item">
                    <h6>📌 Currently Learning</h6>
                    <div className="badge-group">
                      <span className="goal-badge">Core ML & Data</span>
                      <span className="goal-badge">Data Handling</span>
                      <span className="goal-badge">ML Algorithms</span>
                    </div>
                  </div>
                  <div className="learning-item">
                    <h6>🎯 Upcoming Goals</h6>
                    <div className="badge-group">
                      <span className="goal-badge">Deep Learning</span>
                      <span className="goal-badge">Keras</span>
                      <span className="goal-badge">AI/ML with Python</span>
                    </div>
                  </div>
                  <div className="learning-item">
                    <h6>📘 Learning Platforms</h6>
                    <div className="badge-group">
                      <span className="goal-badge">Kaggle</span>
                      <span className="goal-badge">YouTube</span>
                      <span className="goal-badge">Roadmap.sh</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className='g-4 mt-4 mt-md-0 ms-md-3 ms-0'>
            <div style={{ height: '100%', minHeight:"200px" , minWidth:'200px' }}>
              <MapContainer
                center={[12.3, 79.5]}
                zoom={5.5}
                style={{ height: '100%', width: '100%', borderRadius: '16px' }}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={false}
                touchZoom={false}
                keyboard={false}
                boxZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution=""
                />
                <Marker position={[13.0827, 80.2707]} icon={customIcon}>
                  <Popup>You're in Chennai!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </Col>
        </Row>
      </Container>
      {/* project list */}
      <div className='about container d-flex flex-row justify-content-center' id='pro'>
        <div>
          <h6 className='aboutus mt-5 pt-5'>From Concept to Reality</h6>
          <h1 className='head' style={{textAlign:'center',lineHeight:'60px'}}>Project Highlights</h1>
          <p className="text-center contend">
            Showcasing design, development, and real-world impact across different projects.          
          </p>
        </div>
      </div>
      {/* projects */}
      <div className="project-section-wrapper" >
        {projects.slice(0, 3).map((project) => (
          <div key={project.id} className='project-card d-flex flex-md-row flex-column mt-5 mx-3 border p-3  rounded-4 h-100 align-items-center'>
            <div className='pw mx2 mx-md-5 my-3'>
            <h6 className='project-cont'>{project.subtitle}</h6>
            <h3 className='mt-3'>{project.title}</h3>
            <hr className='me-3'/>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <FaCheckCircle size={24} color="#aaa" style={{ marginRight: '8px', marginTop: '4px' }} />
                <p className="proj-des " mt-3>{project.description1}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <FaCheckCircle size={24} color="#aaa" style={{ marginRight: '8px', marginTop: '4px' }} />
                <p className="proj-des" mt-3>{project.description2}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <FaCheckCircle size={24} color="#aaa" style={{ marginRight: '8px', marginTop: '4px' }} />
                <p className="proj-des" mt-3>{project.description3}</p>
            </div>
            <button className='button2 border rounded mt-3 d-flex align-items-center justify-content-center gap-2'> 
              <NavLink to={project.link} style={{textDecoration:'none',color:"black"}} href={project.link}>View Project</NavLink> 
              <FiExternalLink size={16} />
            </button>
            </div>
            <div className='pw1' style={{width:""}}>
              <img src={project.imageUrl} alt="" className='project-img border p-3 rounded-4' />
            </div>
          </div>
        ))}
      </div>
      <button className='button3 rounded-5 p-3 d-flex align-items-center justify-content-center gap-2'> 
              <NavLink to={'/project'} style={{textDecoration:'none',color:"white",fontSize:"18px",fontWeight:"700"}}>View All Project</NavLink> 
              <FiExternalLink size={20} />
      </button>
      {/* contact  */}
      <div id='contact' className='about container d-flex flex-row justify-content-center mt-5'>
        <div>
          <h6 className='aboutus mt-5 pt-5'>Drop a Message</h6>
          <h1 className='head' style={{textAlign:'center',lineHeight:'60px'}}>Let's Start Here</h1>
          <p className="text-center contend">
            Feel free to reach out for freelance work, collaboration,<br /> or even tech talk!          
          </p>
        </div>
      </div>
      <Container className="pb-5 mt-3">
        <Row className="justify-content-center">
          <Col md={7}>
              {status === "success" && (
                toast.success('Deleted Successfully!')
              )}
              {status === "error" && (
                <Alert variant="danger">Oops! Something went wrong.</Alert>
              )}

              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="user_name" required placeholder="Your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="user_email" required placeholder="your@email.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" name="subject" required placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={5} required placeholder="Write your message..." />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit" className="contact-button border-0 mt-3">
                    Send Message
                  </Button>
                </div>
              </Form>
          </Col>
        </Row>
      </Container>
      {/* footer  */}
        <Footer/>
    </div>
    
  );
}

export default Home;
