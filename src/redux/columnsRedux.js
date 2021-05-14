import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');
export const DELETE_COLUMN = createActionName('DELETE_COLUMN');



// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });
export const createActionDeleteColumn = payload => ({ payload: {  ...payload }, type: DELETE_COLUMN });



// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN: // app/columns/ADD_COLUMN
      console.log('action', action, statePart);
      return [...statePart, action.payload];

      case DELETE_COLUMN: // app/columns/ADD_COLUMN
      console.log('DELETE_COLUMN', action);
      const list = statePart.filter(column => column.id != action.payload.id);
      console.log(
        'sdjjksakjahdkjasd', list, action
      )
      return [...list];
    default:
      return statePart;
  }
}