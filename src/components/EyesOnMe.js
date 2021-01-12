// Code EyesOnMe Component Here

function EyesOnMe() {
    function focusHandler(event) {
        return console.log("Good!", event)
    }

    function blurHandler(event) {
        return console.log("Hey! Eyes on me!", event)
    }

    return (
        <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
    )
}

export default EyesOnMe;