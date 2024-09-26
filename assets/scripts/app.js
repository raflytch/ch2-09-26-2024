class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsFunction = updateProjectListsFunction;
    this.connectSwitchButtons();
    this.connectMoreInfoButton();
  }

  connectSwitchButtons() {
    const projectItemElement = document.getElementById(this.id);
    const switchButton = projectItemElement.querySelector(
      "button:last-of-type"
    );

    switchButton.addEventListener("click", () => {
      this.updateProjectListsFunction(this.id);
    });
  }

  connectMoreInfoButton() {
    console.log(`Testttt Ombak Bosss: ${this.id}`);
  }
}

class ProjectList {
  projects = [];

  constructor(type, switchHandlerFunction) {
    this.type = type;
    this.switchHandlerFunction = switchHandlerFunction;
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    for (const projectItem of projectItems) {
      console.log(type);
      console.log(projectItem);
      this.projects.push(
        new ProjectItem(projectItem.id, this.switchProject.bind(this))
      );
    }
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandlerFunction = switchHandlerFunction;
  }

  addProject() {
    console.log(this);
  }

  switchProject(projectId) {
    const project = this.projects.find((i) => i.id === projectId);
    const projectIndex = this.projects.findIndex((i) => i.id === projectId);
    if (project) {
      console.log(`Switching project: ${project.id}`);
      this.addProject();
    } else {
      console.error(`Project with ID ${projectId} not found.`);
    }
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active", null);
    const finishedProjectList = new ProjectList("finished", null);
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
  }
}

App.init();
