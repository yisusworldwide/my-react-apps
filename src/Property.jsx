export default function Property({ name, price, rating, id }){
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price} per night</h3>
            <h4>{rating} stars</h4>
        </div>
    );
}