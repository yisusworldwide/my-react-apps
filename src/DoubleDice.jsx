export default function DoubleDice (){
    const num1 = Math.floor(Math.random() * 6) +1;
    const num2 = Math.floor(Math.random() * 6) +1;
    const num3 = Math.floor(Math.random() * 6) +1;
    const num4 = Math.floor(Math.random() * 6) +1;
    
    const styles = {color: num1 + num2 + num3 + num4 === 21 ? "green" : "red"};
    return (
        
        <div style={styles}>
            <h2>Double Dice</h2>
            {num1 + num2 + num3 + num4 === 21 && <h3>Blackjack!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
            <p>Num3: {num3}</p>
            <p>Num4: {num4}</p>
        </div>
    );
}