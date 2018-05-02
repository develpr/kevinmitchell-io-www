import { h, render, Component } from "preact";

export default class EditToggle extends Component {
  constructor(props) {
    super();
    this.setState({ edit: this.isEditing(), icon: "✏️" });
    this.toggleBodyEditClass();
  }

  toggleEdit = () => {
    this.setEditing(!this.isEditing());
    if (this.isEditing()) {
      this.setState({ edit: true, icon: "✏️" });
    } else {
      this.setState({ edit: false, icon: "📄" });
    }
    this.toggleBodyEditClass();
  };

  isEditing = () => {
    // console.log("value from local storage:" + localStorage.getItem("editMode"));
    return localStorage.getItem("editMode") == "true";
  };

  setEditing = editing => {
    // console.log("value to be set in local storage: " + editing);
    localStorage.setItem("editMode", editing);
  };

  toggleBodyEditClass = () => {
    if (this.isEditing()) {
      console.log("adding edit mode..");
      document.body.classList.add("edit");
    } else {
      document.body.classList.remove("edit");
    }
  };

  render({}, { edit, icon }) {
    return (
      <span title="toggle editing" onClick={this.toggleEdit}>
        {icon}
      </span>
    );
  }
}
