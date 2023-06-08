import React from "react";
import "./IntroReact.css";
import logo from "../logo.svg";

function IntroReact() {
  return (
    <>
      <div className="introBody">
        <h1 className="intro-react-heading">
          <img src={logo} className="App-logo-concepts" alt="logo" />
          Introduction to React
          <img src={logo} className="App-logo-concepts" alt="logo" />
        </h1>
        <div className="introductionReact">
          <article className="intro-article">
            React is a JavaScript library for rendering user interfaces (UI). UI
            is built from small units like buttons, text, and images. React lets
            you combine them into reusable, nestable components. From web sites
            to phone apps, everything on the screen can be broken down into
            components. In this chapter, you’ll learn to create, customize, and
            conditionally display React components.
          </article>
          <div className="intro-react-right">
            const element = <h5>Hello, world!</h5>
            It is called JSX, and it is a syntax extension to JavaScript. We
            recommend using it with React to describe what the UI should look
            like. JSX may remind you of a template language, but it comes with
            the full power of JavaScript.
          </div>
        </div>
        <h3 className="installationReact-heading">Installation and Setup</h3>
        <div className="installationReact">
          <div className="installLeftTab">
            <p>For the installation of react Node and VS Code are required</p>
            <a href="https://create-react-app.dev/docs/getting-started/">
              create-react-app
            </a>
          </div>
          <div className="installRightTab">
            <h6>npx create-react-app appName</h6>
            <h6>cd appName</h6>
            <h6>npm start</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroReact;
