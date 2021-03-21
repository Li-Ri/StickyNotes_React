import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar/Navbar";
import Note from "./Note/Note";
import Modal from "./Modal/Modal";
import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";

class App extends Component {
  state = {
    inputField: "Enter a note",
    notes: [
      {
        title: "This is my first note",
        note: "Is thing Working",
      },
      {
        title: "This is my second note",
        note:
          "This should be testing the height and width of the note component",
      },
    ],
    showModal: false,
  };

  newNote = () => {
    const doesShow = this.state.showModal;
    this.setState({ showModal: !doesShow });
  };

  handleClick = (event) => {};

  deleteNote = (index) => {
    const noteIndex = this.state.notes.findIndex((note) => {
      return note.index == index;
    });

    const notes = [...this.state.notes];
    console.log(notes);
    notes.splice(noteIndex, 1);

    this.setState({
      notes: notes,
    });
  };

  render() {
    const posts = this.state.notes.map((p, index) => {
      return (
        <Note
          title={p.title}
          note={p.note}
          delete={() => this.deleteNote(index)}
        />
      );
    });
    return (
      <div className="App">
        <Modal doesShow={this.state.showModal} submit={this.handleClick} />
        <Navbar newNote={this.newNote} />
        {posts}
      </div>
    );
  }
}

export default App;
