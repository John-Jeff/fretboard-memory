const noteDisplay = document.querySelector('.note-display');
const noteList = document.querySelectorAll('.note');

noteList.forEach(note => {
    note.addEventListener('click', function() {
        console.log(this.dataset.note);
        noteDisplay.textContent = this.dataset.note;
        createNoteIcon(this);
    });
});

function createNoteIcon(noteElement) {
    const noteIcon = document.createElement('div');
    noteIcon.classList.add('note-icon');
    noteIcon.textContent = noteElement.dataset.note;

    appendNewElement(noteElement, noteIcon);
}

function appendNewElement(parent, child) {
    parent.append(child);
}