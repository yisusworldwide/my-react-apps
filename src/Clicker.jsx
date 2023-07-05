function handleClick(){
    console.log("Button Clicked!");
}

export default function Clicker(){

    return (
        <div>
            <p>Click the button down below:</p>
            <button onClick={handleClick}>Click here!!</button>
        </div>
        
    );

}