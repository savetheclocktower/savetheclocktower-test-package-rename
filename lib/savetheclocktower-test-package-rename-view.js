'use babel';

export default class SavetheclocktowerTestPackageRenameView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('savetheclocktower-test-package-rename');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The SavetheclocktowerTestPackageRename package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
