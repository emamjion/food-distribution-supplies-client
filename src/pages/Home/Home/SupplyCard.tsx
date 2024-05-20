const SupplyCard = ({supply}) => {
    const { image, title, category, quantity } = supply; 
    return (
        <div>
            <img src={image} />
            <div>
                <h1>{title}</h1>
                <p>{category}</p>
                <p>{quantity}</p>
            </div>
            <div>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default SupplyCard;