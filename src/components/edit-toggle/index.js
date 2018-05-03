import { h, render, Component } from "preact";

export default class EditToggle extends Component {
  constructor(props) {
    super();
    if (typeof window === "undefined" ) {      
      this.localStorage = { getItem: (key) => false };
    } else {
      this.localStorage = window.localStorage;
    }
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
    return this.localStorage.getItem("editMode") == "true";
  };

  setEditing = editing => {
    // console.log("value to be set in local storage: " + editing);
    this.localStorage.setItem("editMode", editing);
  };

  toggleBodyEditClass = () => {

    if (typeof window === "undefined" ) {  
      return;
    }

    if (this.isEditing()) {      
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
