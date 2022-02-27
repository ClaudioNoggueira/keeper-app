import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [expand, setExpand] = useState(false);

    function handleOnClick() {
        setExpand(true);
    }

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
            <form className="create-note" onSubmit={(event) => event.preventDefault()}>
                {(expand) ?
                    (
                        <Zoom in={expand}>
                            <input
                                name="title"
                                placeholder="Title"
                                onChange={handleOnChange}
                                value={note.title}
                            />
                        </Zoom>
                    ) : null
                }

                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={expand ? 3 : 1}
                    onChange={handleOnChange}
                    onClick={handleOnClick}
                    value={note.content}
                />

                <Zoom in={expand}>
                    <Fab color="primary" aria-label="add"
                        onClick={() => {
                            props.onAdd(note);
                            setNote({
                                title: "",
                                content: ""
                            });
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}


export default CreateArea;