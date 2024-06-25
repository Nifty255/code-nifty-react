import Main from './routes/Main/Main';
import ProjectsPage from './routes/ProjectsPage/ProjectsPage';
import Contact from './routes/Contact/Contact';

import PROJECTS from './data/projects';

const Routes = Object.freeze([
  {
    index: true,
    element: <Main />,
    label: "Home"
  },
  ...Object.keys(PROJECTS).map(page => ({ // Add each of the project pages.
    path: PROJECTS[page].route,
    element: <ProjectsPage key={page} data-project-page={page} />,
    label: PROJECTS[page].label
  })),
  {
    path: "/contact",
    element: <Contact />,
    label: "Contact"
  },
]);

export default Routes;