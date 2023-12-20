export default function CardsList({ cards }) {

    const renderedCards = cards.map((card) => {
        return (
            <div key={card.id}>
                {card.id}
            </div>
        )
    });

    return (
        <div>
            {renderedCards}
        </div>
    );
}