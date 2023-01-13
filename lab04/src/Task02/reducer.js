export default function (state, action) {
  switch (action.type) {
    case 'POPULATE_TEAMS':
      return action.payload;
    case 'REMOVE_TEAM':
      return state.filter(team => team.id !== action.id);
    case 'ADD_TEAM':
      if (state)
        return [...state, {id: action.id, name: action.name}];
      
      return [{id: action.id, name: action.name}]
    default:
      return state;
  }
}