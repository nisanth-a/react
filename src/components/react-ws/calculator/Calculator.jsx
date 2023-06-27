import React, { useState } from "react";

function Calculator() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const CalculatorTitle = (props) => {
    console.log(props);
    return <div className="calculator-title ui header">{props.value}</div>;
  };

  const OutputScreenRow = (props) => {
    return (
      <div className="screen-row ui input">
        <input type="text" readOnly value={props.value} />
      </div>
    );
  };

  const OutputScreen = () => {
    return (
      <div className="screen">
        <OutputScreenRow value={question} />
        <br></br>
        <br></br>
        <OutputScreenRow value={answer} />
        <br></br>
        <br></br>
      </div>
    );
  };

  const Button = (props) => {
    return (
      <input type="button" value={props.label} onClick={props.handleClick} />
    );
  };

  const handleClick = (event) => {
    const value = event.target.value;

    switch (value) {
      case "=": {
        if (question !== "") {
          let ans = "";
          try {
            ans = eval(question);
          } catch (err) {
            setAnswer("Math Error");
          }
          if (ans === undefined) setAnswer("Math Error");
          else {
            setAnswer(ans);
            setQuestion(question);
          }
          break;
        }
      }
      case "Clear": {
        setQuestion("");
        setAnswer("");
        break;
      }

      case "Delete": {
        let str = question;
        str = str.substr(0, str.length - 1);
        setQuestion(str);
        break;
      }

      default: {
        setQuestion((prevQuestion) => prevQuestion + value);
        break;
      }
    }
  };

  return (
    <div className="frame">
      <CalculatorTitle value="Basic Calculator" />
      <div className="mainCalc">
        <OutputScreen />
        <div className="button-row">
          <Button content="primary" label={"Clear"} handleClick={handleClick} />
          <Button label={"Delete"} handleClick={handleClick} />
          <Button label={"."} handleClick={handleClick} />
          <Button label={"/"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"7"} handleClick={handleClick} />
          <Button label={"8"} handleClick={handleClick} />
          <Button label={"9"} handleClick={handleClick} />
          <Button label={"*"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"4"} handleClick={handleClick} />
          <Button label={"5"} handleClick={handleClick} />
          <Button label={"6"} handleClick={handleClick} />
          <Button label={"-"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"1"} handleClick={handleClick} />
          <Button label={"2"} handleClick={handleClick} />
          <Button label={"3"} handleClick={handleClick} />
          <Button label={"+"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"0"} handleClick={handleClick} />
          <Button label={"="} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
export default Calculator;
