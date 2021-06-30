import React, { useEffect, useState } from "react";
import { Container, Grid, Header, Icon } from "semantic-ui-react";
import TodoForm from "../form/TodoForm";
import uniqueId from "lodash/uniqueId";
import TodoTable from "./TodoTable";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      setTodos([...todos]);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("completed")) {
      const completes = JSON.parse(localStorage.getItem("completed"));
      setCompletedTodos([...completes]);
    }
  }, []);

  const handleSubmit = (values) => {
    const todo = {
      no: "secert" + Math.random() * 7,
      task: values.todo,
      status: false,
    };
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  };

  const handleComplete = (todo) => {
    const modifiedTodos = todos.map((todoVal) => {
      if (todoVal.no === todo.no) {
        todoVal.status = true;
      }
      return todoVal;
    });
    setTodos([...modifiedTodos]);
    localStorage.setItem("todos", [...modifiedTodos]);
  };

  const hanldeRemove = (todo) => {
    const modifiedTodos = todos.filter((todoVal) => todoVal !== todo);
    setTodos([...modifiedTodos]);
    localStorage.setItem("todos", [...modifiedTodos]);
    setCompletedTodos([...completedTodos, todo]);
    localStorage.setItem(
      "completed",
      JSON.stringify([...completedTodos, todo])
    );
  };

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as="h3">
              <Icon circular inverted name="ordered list" size="massive" />
              Enter the To Do List
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <TodoForm onSubmit={handleSubmit} />
      {todos.length !== 0 && (
        <TodoTable
          todos={todos}
          onComplete={handleComplete}
          onRemove={hanldeRemove}
        />
      )}
    </Container>
  );
  //   const inputValue = useRef(null);
  //   const [value, setValue] = useState([]);

  //   const hanldeSubmit = () => {
  //     if (inputValue.current.value.trim() !== "") {
  //       const currentValue = inputValue.current.value.trim();
  //       setValue([...value, currentValue]);
  //       inputValue.current.value = "";
  //       inputValue.current.focus();
  //     }
  //     console.log("no empty strings allowed...");
  //   };

  //   const hanldeDelete = (remove_value) => {
  //     const filteredResult = value.filter((val) => val !== remove_value);
  //     setValue([...filteredResult]);
  //   };
};

export default Home;

{
  /* <input ref={inputValue} type="text" name="type-something"></input>
      <button onClick={hanldeSubmit} type="submit">
        Submit
      </button>
      {value.length !== 0 && (
        <button
          className="btn btn-sm btn-success ml-3"
          onClick={() => setValue([])}
        >
          Clear
        </button>
      )}
      <ul>
        {value &&
          value.map((val) => (
            <div key={val + 1} className="row p-10">
              <li>{val}</li>
              <button
                type="button"
                className="btn btn-sm btn-danger btn-outline mb-3 ml-2"
                onClick={() => hanldeDelete(val)}
              >
                remove
              </button>
            </div>
          ))}
      </ul> */
}
