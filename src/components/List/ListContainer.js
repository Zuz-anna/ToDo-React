import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn, createActionDeleteColumn} from '../../redux/columnsRedux.js'; 

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => {

  console.log('mapDispatchToProps', props)

  return ({
    addColumn: title => dispatch(createActionAddColumn({
      listId: props.id,
      title,
    })),
    deleteColumn: (id) => dispatch(createActionDeleteColumn({
      id,    
    })),
  });
}




export default connect(mapStateToProps, mapDispatchToProps)(List);