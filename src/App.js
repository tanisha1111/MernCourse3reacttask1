import { useState } from "react";
import "./App.css";

function WordCounter() {
  const [wordCount, setWordCount] = useState(0);

  const handleKeyPress = (e) => {
    const count = e.target.value;

    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(" ").length;
      }
    };

    setWordCount(countWords(count));
  };

  return (
    <div id="container">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type here"
        onChange={handleKeyPress}
      ></textarea>
      <p style={{ textAlign: "left" }}>Word Count: {wordCount}</p>
    </div>
  );
}

function App() {
  return <WordCounter />;
}

export default App;
