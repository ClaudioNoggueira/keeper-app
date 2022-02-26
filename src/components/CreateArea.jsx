import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleOnChange(event) {
        const { name, value } = event.target;

        setNote(previousValue => {
            return {
                ...previousValue,
                [name]: value
            }
        });
    }

    return (
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                <input name="title" placeholder="Title" onChange={handleOnChange} value={note.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleOnChange} value={note.content} />
                <button
                    onClick={() => {
                        props.onAdd(note);
                        setNote({
                            title: "",
                            content: ""
                        });
                    }}

                >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;