function formHandler(e){
    e.preventDefault();
    console.log("Preventing REFRESH when Submit");

}

export default function Form(){
    return (
        <form>
            <button onClick={formHandler}>Submit Form</button>
        </form>
    );
}