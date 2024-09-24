const actionTypes = {
  error:'ERROR',
  succes:'SUCCES',
  save:'SAVE',
  sincronize: 'SINCRONIZEITEM'
};

const initialState = ({ initialValue }) => ({
  item: initialValue,
  loading: true,
  error: false,
  sincronizedItem: true,
});

const reducerObject = (state, payload) => ({
  [actionTypes.error]: { 
    ...state, 
    loading: false,
    error: true, 
  },
  [actionTypes.succes]:{
    ...state,
    loading: false,
    error: false,
    sincronizedItem:true,
    item: payload,
  },
  [actionTypes.save]:{
    ...state,
    loading: false,
    error: false,
    sincronizedItem:true,
    item: payload,
  },
  [actionTypes.sincronize]:{
    ...state,
    loading: true,
    sincronizedItem:false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { reducer, initialState, actionTypes };