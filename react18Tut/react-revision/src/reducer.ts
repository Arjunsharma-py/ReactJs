let lastId = 0;

interface bugState {
  id: number;
  description: string;
  resolved: boolean;
}

type bugAction =
  | { type: "bugAdded"; payload: bugState }
  | { type: "bugRemoved"; id: number };

const reducer = (state: bugState[], action: bugAction) => {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case "bugRemoved":
      return state.filter((bug) => bug.id != action.id);

    default:
      return state;
  }
};

export default reducer;
