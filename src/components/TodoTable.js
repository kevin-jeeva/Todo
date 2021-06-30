import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";

const TodoTable = ({ todos, onComplete, onRemove }) => {
  const displayTodos = () => {
    if (todos) {
      return todos.map((todo, index) => {
        const positive = todo.status ? true : false;
        const negative = !todo.status ? true : false;
        return (
          <Table.Row key={todo.no} positive={positive} negative={negative}>
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{todo.task}</Table.Cell>
            <Table.Cell>
              {todo.status ? (
                <Icon name="checkmark">Completed</Icon>
              ) : (
                <Icon name="close">Incomplete</Icon>
              )}
            </Table.Cell>
            <Table.Cell>
              {!todo.status && (
                <Button inverted color="green" onClick={() => onComplete(todo)}>
                  Complete Task
                </Button>
              )}
              <Button inverted color="red" onClick={() => onRemove(todo)}>
                Remove
              </Button>
            </Table.Cell>
          </Table.Row>
        );
      });
    }
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Task</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{todos && displayTodos()}</Table.Body>
    </Table>
  );
};

export default TodoTable;
