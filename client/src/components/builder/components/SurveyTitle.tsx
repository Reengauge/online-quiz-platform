import React, { useState } from "react";
import styled from "styled-components";

export default function SurveyTitle({ title, handleChangeTitle } : {title:any, handleChangeTitle:any}) {
    const [editing, setEditing] = useState(false);

    function toggleEditing() {
        setEditing(!editing);
    }

    return (
        <Title>
            <Heading>
                {editing ? (
                    <input type="text" value={title} onChange={handleChangeTitle} />
                ) : (
                    title
                )}
            </Heading>
            <button onClick={toggleEditing}>
                {editing ? (
                    <>
                        <i className="fas fa-save icon" />
                        Save Title
                    </>
                ) : (
                    <>
                        <i className="fas fa-pen icon" />
                        Edit Title
                    </>
                )}
            </button>
        </Title>
    );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  flex: 1 0;
  margin-right: 0.3em;
`;
