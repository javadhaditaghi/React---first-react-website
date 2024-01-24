import "./carouselCard.css";

function CarouselCard(props) {
    return (
        <div className="card-wrapper">
            {props.children}
        </div>
    );
}

export default CarouselCard;