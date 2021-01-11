import {PUBLISH_REVIEW} from "../constants";
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  switch (action.type){
    case PUBLISH_REVIEW:
      const newAction = {...action, payload: { ...action.payload, id: uuidv4(), userId: uuidv4()}};
      next(newAction);
      break;
    default:
      next(action);
  }
};
