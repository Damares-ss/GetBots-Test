import { 
    Col,
    Container, 
    Row,
} from "react-bootstrap"
import Navbar from "../../Components/Navbar/Navbar"
import Card from "../../Components/Card/Card"
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Container>
                <Row>
                    <Col className="mt-5" sm={4}>
                        <Card />
                    </Col>
                </Row>
            </Container>
        </div>
      )
}

export default Home