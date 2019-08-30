import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Comment.css";

export const Comment = ({
    text,
    votes,
    id,
    thumbUpComment,
    thumbDownComment,
    removeComment,
    editComment
}) => (
    <li className="li-comment">
        {text}
        <span className="votes"> votes: {votes}</span>
        <div className="comment-buttons">
            <button
                className="b-icon --thumbs-up"
                onClick={() => thumbUpComment(id)}
            >
                <FontAwesomeIcon icon={["far", "thumbs-up"]} />
            </button>
            <button
                className="b-icon --thumbs-down"
                onClick={() => thumbDownComment(id)}
            >
                <FontAwesomeIcon icon={["far", "thumbs-down"]} />
            </button>
        </div>
    </li>
);
