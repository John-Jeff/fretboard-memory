const noteDisplay = document.querySelector('.note-display');
const noteList = document.querySelectorAll('.note');

noteList.forEach(note => {
    note.addEventListener('click', function() {
        console.log(this.dataset.note);
        noteDisplay.textContent = this.dataset.note;
    });
});