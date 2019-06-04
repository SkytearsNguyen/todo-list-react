import React from "react";
import { Form, Select, Popup } from "semantic-ui-react";

const statusOption = [
  { key: "Done", text: "Done", value: "Done" },
  { key: "Not Done", text: "Not Done", value: "Not Done" }
];

class TodoForm extends React.Component {
  state = {};

  handleSubmit() {}

  changeTime = ({ name, value }) => {
    this.setState({
      [name]: value
    });
  };
  render() {
    // const {dataTime} = this.state;
    return (
      <Form>
        <Form.Field>
          <label>ID</label>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" />
        </Form.Field>
        <Form.Field>
          <label>Time</label>
          <input type={"datetime-local"} />
        </Form.Field>
        <Form.Field>
          <label>Status</label>
          <Popup
            trigger={
              <Select placeholder="Choose status" options={statusOption} />
            }
            content="Click here to select status."
            inverted
          />
        </Form.Field>
        <Form.TextArea label="Description" placeholder="Description" />
        <div style={{ display: "flex" }}>
          <Form.Button inverted size="large" color="blue">
            Submit
          </Form.Button>
          <Form.Button
            inverted
            size="large"
            color="red"
            onClick={() => this.props.closeForm()}
          >
            Cancel
          </Form.Button>
        </div>
      </Form>
    );
  }
}

export default TodoForm;
