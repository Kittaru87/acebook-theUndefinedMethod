import React, { useContext, useState } from "react";
import PostContext from "../../../context/Post/PostContext";

const Home = () => {
  const postContext = useContext(PostContext);
  const { something, changeSomething } = postContext;

  const [toChange, setToChange] = useState("");

  const handleChange = (event) => {
    setToChange(event.target.value);
  };

  const handleSubmit = (e) => {
    console.log(toChange);
    changeSomething(toChange);
    e.preventDefault();
  };

  return (
    <div data-test="home-container">
      <p>Hello from home</p>
      <h2>something = {something}</h2>
      <p>
        type in the below form to change the value of something, above. I used
        hooks, context and reducers here to change the state of something above.
      </p>
      <p>
        I created a PostState.js file to control state. PostState has functions
        in there that I call from the above postContext (see code, Home.js)
      </p>
      <p>
        The PostState then dispatches that to a reducer called PostReducer.js
        which handles the change in state.
      </p>
      <p>
        Why manage state in this way? Well, now I have avoided prop drilling.
        Any component in this React application can now grab whatever state it
        needs without the need for me to perform prop drilling which is not
        maintainable, ugly and cumbersome.
      </p>
      <p>
        This also acts very much like Redux, a very popular state management
        tool for large applications.
      </p>
      <p>
        I had to adjust my tests in such a way as to allow state to be accepted
        from Context
      </p>
      <h3>
        Note: For a simple task like this, <span>THIS IS OVERKILL</span>. There
        are much much more simpler ways to deal with this sort of state change.
        This is to show the use of Context through a very basic example
      </h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={toChange} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;