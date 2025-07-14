import React from 'react';

// Re-use the existing Agent application that lives inside the `agnt` sub-folder.
// NOTE: the relative path climbs three directories to reach the repository root,
// then drills into agnt/src. Keeping the file in one place avoids a massive code
// duplication while still satisfying the router requirement.
import AgentApp from '../../../agnt/src/App.jsx';

// We expose it under a descriptive name so it can be referenced by React-Router.
const AgentPage = () => {
  return <AgentApp />;
};

export default AgentPage; 