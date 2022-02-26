import React, { useState } from 'react';

//components
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

// default notes (dummy data)
// import notes from '../notes';

function App() {
    const [allNotes, setAllNotes] = useState([]);

    function addNote(title, content) {
        const newNote = {
            title: title,
            content: content
        };

        setAllNotes(previousValues => {
            return [...previousValues, newNote];
        });
    }

    function deleteNote(id) {
        setAllNotes(previousValues => {
            return previousValues.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />

            <CreateArea
                onAdd={addNote}
            />

            {/* DUMMY DATA
            {notes.map((note) => {
                return (
                    <Note
                        id={note.key}
                        key={note.key}
                        title={note.title}
                        content={note.content}
                    />
                );
            })} */}

            {allNotes.map((note, index) => {
                return (
                    <Note
                        id={index}
                        key={index}
                        title={note.title}
                        content={note.content}
                        onDeleteAction={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;