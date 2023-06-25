document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById('btn-click');
    if (submitButton !== null) {
        submitButton.addEventListener('click', function () {
            var firstName = document.getElementById("firstName_text").value;
            var lastName = document.getElementById("lastName_text").value;
            var note = new newNote(firstName, lastName);
            note.AddNote();
        });
    }
});
var newNote = /** @class */ (function () {
    function newNote(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    newNote.prototype.AddNote = function () {
        var elementFirstName = document.createElement('p');
        var elementLastName = document.createElement('p');
        elementFirstName.innerText = this.firstName ? this.firstName : '';
        elementLastName.innerText = this.lastName ? this.lastName : '';
        var noteContainer = document.getElementById("new-notes");
        if (noteContainer !== null) {
            noteContainer.appendChild(elementFirstName);
            noteContainer.appendChild(elementLastName);
        }
    };
    return newNote;
}());
