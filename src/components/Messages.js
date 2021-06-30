import React, { useState, useEffect } from "react";
import { Container, Table, Message } from "semantic-ui-react";

const TodoCompletedTable = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("completed"));
    if (localStorage.getItem("completed")) {
      const completes = JSON.parse(localStorage.getItem("completed"));
      setTodos([...completes]);
    }
  }, []);

  const displayTodos = () => {
    if (todos) {
      console.log(todos);
      return todos.map((todo, index) => {
        return (
          <Table.Row key={todo.no}>
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{todo.task}</Table.Cell>
          </Table.Row>
        );
      });
    }
  };

  if (todos.length !== 0) {
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Completed Task</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{todos && displayTodos()}</Table.Body>
        </Table>
      </Container>
    );
  }

  return (
    <Container>
      <Message floating>No Completed Task here :)</Message>
    </Container>
  );
};

export default TodoCompletedTable;
