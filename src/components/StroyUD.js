import React, { useState } from "react";
import { dbService } from "../fbase";
import "./StoryUD.css";

const StoryUD = ({ storyObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newStory, setNewStory] = useState(storyObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this story?");
    if (ok) {
      await dbService.doc(`storys/${storyObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`storys/${storyObj.id}`).update({
      text: newStory,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewStory(value);
  };
  return (
    <div className="eachStroy">
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your Story"
              value={newStory}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Story" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{storyObj.text}</h4>
          {isOwner && (
            <div className="buttons">
              <button className="button1" onClick={onDeleteClick}>Delete Story</button>
              <button className="button2" onClick={toggleEditing}>Edit Story</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default StoryUD;