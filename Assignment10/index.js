introJs().setOptions({
  steps: [{
    title: 'Introduction',
    intro: 'Hello Peeps! 👋 Welcome to my Blog'
  },
  {
    element: document.querySelector('.rmn-heading'),
    intro: 'A one-stop for the solution to all Edureka Assignments.'
  },
  {
    element: document.querySelector('#accordion'),
    intro: 'Click on the Accordion to reveal the answer.'
  },
  {
    element: document.querySelector('.navbar-collapse'),
    intro: 'Use the Navigation buttons to learn more about the offerings.'
  },
  {
    element: document.querySelector('.container-fluid'),
    intro: 'Share this with your friends who may need this .'
  },
  {
    title: 'Farewell!',
    intro: 'Hope you find it Resourceful! U+1F604'
  }],
  "dontShowAgain": true
}).start();