import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    id: 857990,
    title: "New note ram!", 
    body: "I am a new notes."
});+

console.log(NotesAPI.getAllNotes());