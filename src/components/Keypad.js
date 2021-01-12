// Code Keypad Component Here

function Keypad() {
    function handleChange(event) {
        // return console.log(`${event.target.name}: ${event.target.value}`)
        return console.log("Entering password...", event.target.value)

    }

    return (
        <div>
            <input 
                type="password" 
                name="search"
                onChange={handleChange}
                placeholder="please enter password..."
            />
        </div>
    )

}

export default Keypad;
