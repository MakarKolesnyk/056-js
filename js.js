class Diary {
  constructor(note) {
    this.notes = [note];
  }
  addNote(note) {
    if (this.notes.includes(note)) {
      return;
    }
    this.notes.push(note);
  }
  deleteNote(note) {
    const indexNote = this.notes.indexOf(note);
    if (indexNote >= 0) {
      this.notes.splice(indexNote, 1);
    }
  }
  updateNote(note, newNote) {
    const indexNote = this.notes.indexOf(note);
    if (indexNote >= 0) {
      this.notes.splice(indexNote, 1, newNote);
    }
  }
  showAllNotes() {
    this.notes.forEach((el) => {
      console.log(el);
    });
  }
}

const diary = new Diary("Hello");
diary.addNote("learn class");
diary.addNote("learn get, set");
diary.addNote("qwerty");
diary.addNote("Hi");
diary.addNote("Hi");
diary.addNote("Hi");
diary.addNote("Hi");
diary.deleteNote("Hi");
diary.deleteNote("Hi");
diary.updateNote("qwerty", "ytrewq");
diary.updateNote("qwerty", "ytrewq");
// diary.showAllNotes();

class Message {
  constructor(message) {
    this.message = message;
  }
  getLength() {
    return this.message.length;
  }
  getCountWords() {
    return this.message.split(" ").length;
  }
  formatCapitalize() {
    return this.message
      .split(" ")
      .map((el) => el[0].toUpperCase() + el.slice(1))
      .join(" ");
  }
  sliceMessage(length = 20) {
    return this.message.slice(0, length) + "...";
  }
  getCountSymbol(symbol){
    return this.message.split("").filter((el)=>el === symbol).length
  }
}

const message = new Message(
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, impedit"
);
console.log(message.getLength());
console.log(message.getCountWords());
console.log(message.formatCapitalize());
console.log(message.sliceMessage());
console.log(message.getCountSymbol("a"));

