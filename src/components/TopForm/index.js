import React from "react";
import { Search, Button, Popup, Select } from "semantic-ui-react";

const selectOptions = [
  { key: "Done", text: "Done", value: "Done" },
  { key: "Not Done", text: "Not Done", value: "Not Done" }
];
class TopForm extends React.Component {
  state = {
    textSearch: ""
  };

  handleSearchChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    this.props.onSearch(this.state.textSearch);
  };

  handleKeyCode = e => {
    if (e.key === "Enter") {
      this.props.onSearch(this.state.textSearch);
    }
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <Popup
          trigger={
            <Search
              onKeyPress={() => this.handleKeyCode()}
              //   onKeyPress={() => this.handleSubmit()}
              placeholder="Search..."
              name="textSearch"
              value={this.state.textSearch}
              onSearchChange={this.handleSearchChange}
            >
              Search
            </Search>
          }
          header="To Do Search"
          content="You may search by name."
          on="focus"
        />
        <Popup
          trigger={
            <Select placeholder="Search status" options={selectOptions} />
          }
          content="Click to search by status."
          inverted
        />
        <Button
          onClick={() => this.handleSubmit()}
          inverted
          size="large"
          color="violet"
        >
          Search
        </Button>
      </div>
    );
  }
}

export default TopForm;
