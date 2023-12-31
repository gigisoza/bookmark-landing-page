import { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import arrowRed from "../images/icon-arrow-red.svg";
import PropTypes from "prop-types";

export default function Question({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <article className="py-3 border-t border-slate-300 last:border-b last:border-slate-300">
        <div
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="font-normal text-lg hover:text-red-400">{question}</h2>
          <button>
            {showAnswer ? (
              <img src={arrowRed} alt="" className="transform rotate-180" />
            ) : (
              <img src={arrow} alt="" />
            )}
          </button>
        </div>
        {showAnswer && <p>{answer}</p>}
      </article>
    </>
  );
}

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};
