export default class NotesAPI{
    static getAllNotes(){
        const notes =JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes;
    }

    static saveNotes(notesToSave){
        return new Date(a.update) > new Date(b.update) ? -1:1;
    }

    static deleteNote(id){

    }
}