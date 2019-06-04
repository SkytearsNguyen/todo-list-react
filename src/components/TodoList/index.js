import React from "react";
import { Table, Message } from "semantic-ui-react";
import TodoItem from "../TodoItem/TodoItem";

const headers = [
  { name: "Name" },
  { name: "Status" },
  { name: "Time" },
  { name: "Description" },
  { name: "Operation" }
];

//render header

class TodoList extends React.Component {
  state = {
    showMessage: false
  };
  handleMessageSuccess = textMessage => {
    this.setState(
      {
        showMessage: textMessage
      },
      () => {
        setTimeout(() => {
          this.setState({
            showMessage: false
          });
        }, 1000);
      }
    );
    console.log(textMessage);
  };

  render() {
    const { open } = this.state;
    const { todos, onEdit } = this.props;
    const renderHeader = headersArray =>
      headersArray.map((header, i) => (
        <Table.HeaderCell key={i} textAlign={"center"}>
          {header.name}
        </Table.HeaderCell>
      ));
    return (
      <>
        {this.state.showMessage && (
          <Message
            style={{ textAlign: "center" }}
            success
            open={open}
            header="Your user remove was successful"
          />
        )}
        <Table celled selectable striped padded color="violet">
          <Table.Header>
            <Table.Row>{renderHeader(headers)}</Table.Row>
          </Table.Header>

          <Table.Body>
            {todos.map(todo => (
              <TodoItem
                onEdit={onEdit}
                key={todo.id}
                todo={todo}
                delete={this.handleMessageSuccess}
              />
            ))}
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default TodoList;
