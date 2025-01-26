import { Component } from "./base-component";
import { autobind as Autobind} from "../decorators/autobind";
import * as Validation from "../util/validation";
import { projectState } from "../state/project";

//ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent(): void {}

  private getUserInput(): [string, string, number] | void {
    const title = this.titleInputElement.value;
    const description = this.descriptionInputElement.value;
    const people = this.peopleInputElement.value;

    const titleValidation: Validation.ValidationConfig = {
      value: title,
      required: true,
    };
    const descriptionValidation: Validation.ValidationConfig = {
      value: description,
      required: true,
      minLength: 5,
    };
    const peopleValidation: Validation.ValidationConfig = {
      value: +people,
      required: true,
      min: 1,
      max: 5,
    };
    if (
      !Validation.validate(titleValidation) ||
      !Validation.validate(descriptionValidation) ||
      !Validation.validate(peopleValidation)
    ) {
      alert("Invalid input, please try again!");
      return;
    } else {
      return [title, description, +people];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.getUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;

      projectState.addProject(title, desc, people);
      console.log(projectState);
    }
    this.clearInputs();
  }
}
