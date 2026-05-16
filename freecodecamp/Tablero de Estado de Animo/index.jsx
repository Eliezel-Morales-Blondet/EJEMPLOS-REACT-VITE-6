// Componente MoodBoardItem
export function MoodBoardItem({ color, image, description }) {
    return (
        <div className="mood-board-item" style={{ backgroundColor: color }}>
            <img className="mood-board-image" src={image} alt={description}/>
            <h3 className="mood-board-text">{description}</h3>
        </div>
    );
}

// Componente MoodBoard
export function MoodBoard() {
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
        <div className="mood-board">
            <MoodBoardItem color="lightblue" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="Playa tranquila" />
            <MoodBoardItem color="lightgreen" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="Campo relajante" />
            <MoodBoardItem color="lavender" image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" description="Santorini mágico" />
        </div>
    </div>
    );
}
