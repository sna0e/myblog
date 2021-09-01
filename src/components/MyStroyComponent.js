import { DateComponent } from "@fullcalendar/react";
import React, {component, useEffect, useState} from "react";
import { authService, dbService } from "../fbase";
import "./MyStroyComponent.css";
import StoryUD from "./StroyUD";

const MyStroyComponent = ({userObj}) => {
    const [story, setStory] = useState("");
    const [storys, setStorys] = useState([]);

    useEffect(()=>{
        dbService.collection("storys").orderBy("createdAt","desc").onSnapshot((snapshot) => {
            const storyArray = snapshot.docs.map((doc) => ({
                id : doc.id,
                ...doc.data(),
            }));
            setStorys(storyArray);
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("storys").add({
            text : story,
            createdAt: Date.now(),
            createId : userObj.uid,
        });
        setStory("");
    };

    const onChange = (event) => {
        const { target : {value}} = event;
        setStory(value);
    };

    return (
        <div className="outline_box">
            <h2 className="mystory_title">나의 하루 이야기</h2>
            <form className="write_story" onSubmit={onSubmit}>
                <input className="input_story" 
                    value={story}
                    onChange={onChange}
                    type="text" 
                    placeholder="How is it today?"
                />
                <input className="input_button" type="submit" value="add story"/>
            </form>
            <div className="uploaded_story">
                {storys.map((story) => (
                    <StoryUD className
                        key={story.id} 
                        storyObj={story} 
                        isOwner={story.createId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};


export default MyStroyComponent;