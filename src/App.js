import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import CommentsListContainer from "./CommentsListContainer";
import CommentInputContainer from "./CommentInputContainer";
import "./App.css";

library.add(faThumbsUp, faThumbsDown);

const App = () => {
  return (
    <div className="app">
      <h1>Comments:</h1>
      <CommentsListContainer />
      <h3>Add a comment</h3>
      <CommentInputContainer />
    </div>
  );
};

export default App;
