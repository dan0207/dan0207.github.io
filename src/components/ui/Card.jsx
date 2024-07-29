

function Card({ card = { title: "Sample Card Title", content: <>Sample Card Content</> } }) {
    return (
        <>
            <div className="card mb-3 text-center shadow-lg bg-light-subtle">
                <div className="card-header bg-primary text-light">{card.title}</div>
                <div className="card-body">
                    {card.content}
                </div>
            </div>
        </>
    )
}


export default Card
