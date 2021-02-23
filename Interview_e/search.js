import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
const url = "http://127.0.0.1:3000";
const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  function debounce(fn, wait) {
    let time;
    return function () {
      var self = this;
      var args = arguments;
      clearTimeout(time);
      time = setTimeout(()=>fn.apply(self, args), wait);
    };
  }

  const get = (uri, callback) => {
    fetch(`${url}${uri}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => callback(res))
      .catch((e) => {
        console.error(e);
      });
  };
  const post = (uri, body, callback) => {
    fetch(`${url}${uri}`, { method: "POST", body })
      .then((res) => res.json())
      .then((res) => callback(res))
      .catch((e) => {
        console.error(e);
      });
  };

  async function fetchList() {}
  useEffect(() => {
    // const fetchList = get('/list',res =>{
    //     res && setData(res);
    // })
    const fetchList = (query) => {
      post("/list", query, (res) => {
        res && setData(res);
      });
    };
    fetchList(query);
  }, [query]);

  return (
    <div className="container">
      <input onChange={debounce((e) => setQuery(e.target.value), 1000)} />
      <div className="list">
        {data.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);