// import React from 'react';
const header = React.createElement("h2", {
    id: "heading"
}, "html to react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
const separateHeading = React.createElement("h4", {
    className: "separate-heading"
}, "Hello world from separate react file");
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(separateHeading);
const groups = React.createElement("div", {
    id: "groups"
}, [
    React.createElement("div", {
        id: "group-a"
    }, React.createElement("div", {
        id: "group-context"
    }, React.createElement("p", {
        className: "text"
    }, "hi i'm nested tag 1"))),
    React.createElement("div", {
        id: "group-b"
    }, React.createElement("div", {
        id: "group-context"
    }, React.createElement("p", {
        className: "text"
    }, "hi i'm nested tag 2")))
]);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(groups);

//# sourceMappingURL=rect-setup-html-to-react.6bd02f5a.js.map
