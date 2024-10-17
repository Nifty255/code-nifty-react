import Main from './routes/Main/Main';
import ProjectsPage from './routes/ProjectsPage/ProjectsPage';

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
]);

export default Routes;