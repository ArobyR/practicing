const reduceCounter = ({ state, actions }) => {
  switch (actions.type) {
    case "add":
      return state + 1;
    default:
      return state;
  }
};

export default reduceCounter;
