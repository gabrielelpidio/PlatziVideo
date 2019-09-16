const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) ||
        state.originals.find(item => item.id === Number(action.payload)) ||
        [],
      };
    case 'SEARCH_VIDEOS':
      return {
        ...state,
        search:
        /* Since Sets in javascript cant have duplicated values this
        helps us to deliver an unique value when searching */
        [...new Set(
          /* Transform each entry of the object into arrays that form pairs of [key, item]
          basically it transforms the Object into a Map */
          Object.entries(state)
            /* Check if that the item contains an Array
            in its second position and that the item is not empty */
            .filter(item => Array.isArray(item[1]) && item[1].length !== 0)
            /*It flatens the arrays to create an array with
            the items in the second position of the two arrays
            so that its easier to iterate */
            .flatMap(item => item[1])
            /* Searchs in the title and description of every item to match the search */
            .filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
              item.description.toLowerCase().includes(action.payload.toLowerCase())),
        )] || [],
      };
    case 'RESET_SEARCH_VIDEOS':
      return {
        ...state,
        search: null,
      };
    default:
      return state;
  }
};

// playing: state.trends.find(item => item.id === Number(action.payload)) ||
//         state.originals.find(item => item.id === Number(action.payload)) ||
//         [],

export default reducer;

