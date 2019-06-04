import React from "react";
import { Icon, Table, Button, Popup, Confirm } from "semantic-ui-react";

class TodoItem extends React.Component {
  state = {
    open: false,
    text: ""
  };

  showConfirm = () => {
    this.setState({
      open: true
    });
  };

  handleCancel = () => {
    this.setState({
      open: false
    });
  };

  handleConfirm = () => {
    this.props.delete(true);
    this.setState({
      open: false
    });
  };

  handleEdit = id => {
    const { onEdit } = this.props;
    onEdit(id);
  };

  render() {
    const { open } = this.state;
    const { todo } = this.props;
    const { name, status, description, id } = todo;
    return (
      <Table.Row>
        <Table.Cell singleLine width={2}>
          {name}
        </Table.Cell>
        <Table.Cell textAlign={"center"}>
          {status ? (
            <Popup
              trigger={<Icon color="green" name="checkmark" size="large" />}
              content="Done"
              inverted
            />
          ) : (
            <Popup
              trigger={<Icon color="red" name="close" size="large" />}
              content="Not Done"
              inverted
            />
          )}
        </Table.Cell>
        <Table.Cell>time</Table.Cell>
        <Table.Cell>{description}</Table.Cell>
        <Table.Cell style={{ display: "flex" }}>
          <Popup
            trigger={
              <Button icon onClick={() => this.handleEdit(id)}>
                <Icon color="violet" size="large" name="edit" />
              </Button>
            }
            content="Edit"
            inverted
          />
          <Popup
            trigger={
              <Button icon onClick={this.showConfirm}>
                <Icon color="red" size="large" name="remove circle" />
              </Button>
            }
            content="Delete"
            inverted
          />
          <Confirm
            open={open}
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TodoItem;
