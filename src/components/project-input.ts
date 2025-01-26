/// <reference path="base-component.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../util/validation.ts" />
/// <reference path="../state/project.ts" />

namespace App {
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

      const titleValidation: ValidationConfig = {
        value: title,
        required: true,
      };
      const descriptionValidation: ValidationConfig = {
        value: description,
        required: true,
        minLength: 5,
      };
      const peopleValidation: ValidationConfig = {
        value: +people,
        required: true,
        min: 1,
        max: 5,
      };
      if (
        !validate(titleValidation) ||
        !validate(descriptionValidation) ||
        !validate(peopleValidation)
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

    @autobind
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
}
