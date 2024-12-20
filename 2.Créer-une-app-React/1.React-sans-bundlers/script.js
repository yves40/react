

function Title() {
  return React.createElement("h1", { className: "title" } , "hello world from react")
}

ReactDOM.createRoot(document.getElementById("root")).render(Title())