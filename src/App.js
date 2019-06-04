import React from "react";
import { Grid, Container, Button } from "semantic-ui-react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TopForm from "./components/TopForm";
import uuid from "uuid/v4";

const todos = [
  {
    id: uuid(),
    name: "Thierry",
    status: false,
    description:
      "Tables will automatically stack their layouts for mobile devices. To disable this behavior, use the unstackable variation or tablet stackable to allow responsive ..."
  },
  {
    id: uuid(),
    name: "Nguyen",
    status: false,
    description:
      "Tables will automatically stack their layouts for mobile devices. To disable this behavior, use the unstackable variation or tablet stackable to allow responsive ..."
  },
  {
    id: uuid(),
    name: "Skytears",
    status: true,
    description:
      "Tables will automatically stack their layouts for mobile devices. To disable this behavior, use the unstackable variation or tablet stackable to allow responsive ..."
  }
];

class App extends React.Component {
  state = {
    isOpenForm: true,
    todos,
    selectedOption: null
  };

  changeCloseForm = () => {
    this.setState({
      isOpenForm: false
    });
  };

  changeOpenForm = () => {
    this.setState({
      isOpenForm: !this.state.isOpenForm
    });
  };

  handleSearch = childText => {
    const text = childText.trim().toLowerCase();
    const fileredTodos = todos.filter(todo =>
      todo.name.toLowerCase().includes(text)
    );
    this.setState({
      todos: fileredTodos
    });
  };

  handleEdit = id => {
    console.log("app ", id);
  };

  render() {
    const { isOpenForm, todos } = this.state;
    return (
      <Container style={{ marginTop: "1rem" }}>
        <Grid.Row style={{ display: "flex", justifyContent: "space-between" }}>
          <TopForm onSearch={this.handleSearch} />
          <Button
            toggle
            inverted
            size="large"
            color="green"
            onClick={e => this.changeOpenForm()}
          >
            Create Todo
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Grid columns={2} padded="vertically">
            <Grid.Column width={isOpenForm ? 11 : 16}>
              <TodoList todos={todos} onEdit={this.handleEdit} />
            </Grid.Column>
            {/*  a && b && c => chay het , `1 cai sai se dung cho sai */}
            {isOpenForm && (
              <Grid.Column
                width={5}
                style={{
                  borderTop: "2px solid #6435C9",
                  borderRadius: "5px"
                }}
              >
                <TodoForm closeForm={this.changeCloseForm} />
              </Grid.Column>
            )}
          </Grid>
        </Grid.Row>
      </Container>
    );
  }
}

export default App;
