// Coded By Vipul gupta
let notebooks = [];
let currentNotebook = null;

function newNote() {
    if (!currentNotebook) {
        alert("Please select or create a notebook first.");
        return;
    }
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    document.getElementById('noteForm').style.display = 'block';
}

function newNotebook() {
    const notebookName = prompt('Enter the name of the new notebook:');
    if (notebookName) {
        const notebook = { id: Date.now(), name: notebookName, notes: [] };
        notebooks.push(notebook);
        displayNotebooks();
        setCurrentNotebook(notebook.id);
    }
}

function addNote() {
    const noteTitle = document.getElementById('noteTitle').value;
    const noteContent = document.getElementById('noteContent').value;

    if (noteTitle && noteContent) {
        const note = { id: Date.now(), title: noteTitle, content: noteContent };
        const notebook = notebooks.find(nb => nb.id === currentNotebook);
        notebook.notes.push(note);
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
        document.getElementById('noteForm').style.display = 'none';
        displayNotes();
    }
}

function displayNotebooks() {
    const notebookList = document.getElementById('notebookList');
    notebookList.innerHTML = '';

    notebooks.forEach(notebook => {
        const notebookElement = document.createElement('div');
        notebookElement.className = 'notebook';
        notebookElement.textContent = notebook.name;
        notebookElement.onclick = () => setCurrentNotebook(notebook.id);
        notebookList.appendChild(notebookElement);
    });
}

function setCurrentNotebook(id) {
    currentNotebook = id;
    displayNotes();
}

function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';

    const notebook = notebooks.find(nb => nb.id === currentNotebook);
    if (notebook) {
        notebook.notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.className = 'note';
            noteElement.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <div class="note-buttons">
                    <button class="edit" onclick="editNote(${note.id})">Edit</button>
                    <button onclick="deleteNote(${note.id})">Delete</button>
                </div>
            `;
            notesList.appendChild(noteElement);
        });
    }
}

function editNote(id) {
    const notebook = notebooks.find(nb => nb.id === currentNotebook);
    const note = notebook.notes.find(note => note.id === id);
    document.getElementById('noteTitle').value = note.title;
    document.getElementById('noteContent').value = note.content;
    deleteNote(id);
    document.getElementById('noteForm').style.display = 'block';
}

function deleteNote(id) {
    const notebook = notebooks.find(nb => nb.id === currentNotebook);
    notebook.notes = notebook.notes.filter(note => note.id !== id);
    displayNotes();
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

function updateTime() {
    const timeElement = document.getElementById('time');
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const greeting = hours < 12 ? 'Good Morning' : hours < 16 ? 'Good Afternoon' : 'Good Evening';
    greetingElement.textContent = greeting;
    timeElement.textContent = `${hours}:${minutes}`;
}

document.addEventListener('DOMContentLoaded', () => {
    displayNotebooks();
    updateTime();
    setInterval(updateTime, 1000);
});
