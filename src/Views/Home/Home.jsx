import {
    Col,
    Container,
    Row,
} from "react-bootstrap"
import Navbar from "../../Components/Navbar/Navbar"
import Card from "../../Components/Card/Card"
import "./Home.css"

const Home = () => {
    const cards = [
        {
            "__id": 2,
            "nome": "Gabriel",
            "email": "teste@teste.com.br",
            "endereco": "Rua São Paulo, 1",
            "telefone": 999999999
        },
        {
            "__id": 4,
            "nome": "Luiz",
            "email": "a@a.com.br",
            "endereco": "Rua Rio de Janeiro, 2",
            "telefone": 888888888
        },
        {
            "__id": 6,
            "nome": "Antônio",
            "email": "b@b.com.br",
            "endereco": "Rua Salvador, 3",
            "telefone": 777777777
        },
        {
            "__id": 8,
            "nome": "Sebastião",
            "email": "c@c.com.br",
            "endereco": "Rua Florianópolis, 4",
            "telefone": 666666666
        }
    ]

    return (
        <div className="home">
            <Navbar />
            <Container>
                <Row>
                    {cards.map((c) => (
                        <Col className="mt-5" sm={4}>
                            <Card key={c._id} card={c} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Home