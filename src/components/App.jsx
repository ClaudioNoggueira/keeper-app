import React, { useState } from 'react';

//components
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

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

    return (
        <div>
            <Header />

            <CreateArea
                onAdd={addNote}
            />

            {allNotes.map((note, index) => {
                return (
                    <Note
                        id={index}
                        key={index}
                        title={note.title}
                        content={note.content}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;