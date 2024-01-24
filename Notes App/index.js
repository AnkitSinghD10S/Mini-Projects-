import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    id: 857990,
    title: "Neew notes!", 
    body: "the new note is created"
});

// NotesAPI.deleteNote(857990);

console.log(NotesAPI.getAllNotes());