import React, { useState } from "react";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleOnChange(event) {
        const { name, value } = event.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'content') {
            setContent(value);
        }
    }

    return (
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                <input name="title" placeholder="Title" onChange={handleOnChange} value={title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleOnChange} value={content} />
                <button
                    onClick={() => {
                        props.onAdd(title, content);
                        setTitle("");
                        setContent("");
                    }}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;