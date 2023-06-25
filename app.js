var Note = /** @class */ (function () {
    function Note(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Note;
}());
document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById('btn-click');
    if (submitButton !== null) {
        submitButton.addEventListener('click', function () {
            var firstName = document.getElementById("firstName_text").value;
            var lastName = document.getElementById("lastName_text").value;
            var newNote = new Note(firstName, lastName);
            console.log(newNote);
        });
    }
});
