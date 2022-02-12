import { getUsers } from "../../Api/users"
import { useEffect, useState } from "react"
import {
    Col,
    Container,
    Row,
} from "react-bootstrap"
import Navbar from "../../Components/Navbar/Navbar"
import Card from "../../Components/Card/Card"
import "./Home.css"

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsersData = async () => {
            const res = await getUsers()
            setUsers(res)
        }
        getUsersData()
    }, [])

    return (
        <div className="home">
            <Navbar />
            <Container>
                <Row>
                    {users.map((u) => (
                        <Col className="mt-5" sm={4}>
                            <Card key={u._id} card={u} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Home