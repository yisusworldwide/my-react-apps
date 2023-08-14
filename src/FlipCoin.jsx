export default function flipCoin (){
    const flipCoin = Math.floor(Math.random() * 2) +1;
    console.log(flipCoin);

    return (
        
        <div>
            <h2>Flip the Coin</h2>
            { flipCoin === 1 ? <h3>It's heads!</h3> : <h3>It's tails!</h3> }
        </div>
    );
}