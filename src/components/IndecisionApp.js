import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state = {
      options: [],
      title: "Decisive",
      subtitle: "Let randomness help you make decisions!",
      selectedOption: undefined
    };
  }

  handleCloseModal = () => {
    this.setState(prevState => ({
      selectedOption: undefined
    }));
  };

  handleDeleteOptions = event => {
    console.log(event);
    this.setState(prevState => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  };

  handlePick = () => {
    const option = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ];
    this.setState(prevState => ({
      subtitle: option,
      selectedOption: option
    }));
  };

  handleAddOption = option => {
    if (!option.trim()) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  componentDidMount() {
    // Re-render and then mount again. Diff
    console.log("component did mount");

    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log("Error saving to localStorage", e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              deleteAll={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          handleCloseModal={this.handleCloseModal}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
