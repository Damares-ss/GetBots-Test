import {
    Card as BaseCard,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap"
import "./Card.css"

const Card = ({ card }) => {
    return (
        <BaseCard className="card border-0 bg-dark text-white">
            <BaseCard.Body className="mt-3">
                <BaseCard.Title> <b>{card.nome}</b> </BaseCard.Title>
            </BaseCard.Body>
            <ListGroup className="list-group-flush mb-3">
                <ListGroupItem className="bg-dark text-white"><b>Email:</b> {card.email} </ListGroupItem>
                <ListGroupItem className="bg-dark text-white"><b>Endereço:</b> {card.endereco} </ListGroupItem>
                <ListGroupItem className="bg-dark text-white"><b>Telefone:</b> {card.telefone} </ListGroupItem>
            </ListGroup>
        </BaseCard>
    )
}
export default Card