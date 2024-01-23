import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    title: "New note !", 
    body: "I am a new notes."
});

console.log(NotesAPI.getAllNotes());