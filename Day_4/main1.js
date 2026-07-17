import { Note } from "./persistent_notes_app.js";

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notes");

let notes = [];

// Load notes from localStorage
function loadNotes() {
    try {
        const savedNotes = localStorage.getItem("notes");

        if (savedNotes) {
            notes = JSON.parse(savedNotes);
        } else {
            notes = [];
        }
    } catch (error) {
        console.log("Error loading notes:", error.message);
        notes = [];
    }
}

// Save notes to localStorage
function saveNotes() {
    try {
        localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
        console.log("Error saving notes:", error.message);
    }
}

// Display notes
function renderNotes() {
    notesContainer.innerHTML = "";

    notes.map((note) => {
        const noteDiv = document.createElement("div");

        noteDiv.className = "note";

        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <small>${note.createdAt}</small>
            <hr>
        `;

        notesContainer.appendChild(noteDiv);
    });
}

// Add new note
addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    const newNote = new Note(title, content);

    notes.push(newNote);

    saveNotes();
    renderNotes();

    titleInput.value = "";
    contentInput.value = "";
});

// Initial load
loadNotes();
renderNotes();