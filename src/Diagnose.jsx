import { useState } from "react";

export default function Diagnose() {
  const [result, setResult] = useState("");

  const questions = [
    { text: "豪華な家に住みたい", type: "A" },
    { text: "世界一周旅行したい", type: "A" },
    { text: "貯金して堅実に暮らしたい", type: "B" },
    { text: "投資して増やしたい", type: "B" },
  ];

  const handleAnswer = (type) => {
    if (type === "A") {
      setResult("あなたは浪費型タイプ！");
    } else {
      setResult("あなたは堅実投資型タイプ！");
    }
  };

  return (
    <div>
      <h2>100億円使い方診断</h2>

      {questions.map((q, index) => (
        <div key={index}>
          <button onClick={() => handleAnswer(q.type)}>
            {q.text}
          </button>
        </div>
      ))}

      {result && <h3>{result}</h3>}
    </div>
  );
}