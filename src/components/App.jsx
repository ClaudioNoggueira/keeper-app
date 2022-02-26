import React from 'react';

//components
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

//default notes
import notes from '../notes';

function App() {
    return (
        <div>
            <Header />

            <CreateArea />
            {notes.map((note) => {
                return (
                    <Note
                        key={note.key}
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