import { useRecoilState, useRecoilValue } from "recoil";
import { textState, charCountState } from "./store/textStore";

function App() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>κΈμμ: {count}</p>
    </div>
  );
}

export default App;
