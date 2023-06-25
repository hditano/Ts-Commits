document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById('btn-click');
    
    if(submitButton !== null) {
        submitButton.addEventListener('click', () => {

            const firstName = (document.getElementById("firstName_text") as HTMLInputElement).value;
            const lastName = (document.getElementById("lastName_text") as HTMLInputElement).value;
            let note = new newNote(firstName, lastName);
            note.AddNote();
        })
    }
})

class newNote {
    firstName: string | undefined;
    lastName: string | undefined;

    constructor(firstName: string | undefined, lastName: string | undefined){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    AddNote() {
        const elementFirstName = document.createElement('p');
        const elementLastName = document.createElement('p');

        elementFirstName.innerText = this.firstName ? this.firstName: '';
        elementLastName.innerText = this.lastName ? this.lastName: '';

        const noteContainer = document.getElementById("new-notes");
        if(noteContainer !== null) {
            noteContainer.appendChild(elementFirstName);
            noteContainer.appendChild(elementLastName);
        }
    }
}