const reduceCounter = ({ state, actions }) => {
  switch (actions.type) {
    case "add":
      return state.num + 1;

    case "subtraction":
      return state.num - 1;
    default:
      return state;
  }
};

export default reduceCounter;
