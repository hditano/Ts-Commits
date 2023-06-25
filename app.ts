class Note {
    firstName: string | undefined;
    lastName: string | undefined;

    constructor(firstName: string | undefined, lastName: string | undefined) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById('btn-click');
    
    if(submitButton !== null) {
        submitButton.addEventListener('click', () => {

            const firstName = (document.getElementById("firstName_text") as HTMLInputElement).value;
            const lastName = (document.getElementById("lastName_text") as HTMLInputElement).value;
            let newNote = new Note(firstName, lastName);
            console.log(newNote);
        })
    }
})