import { ADD_REMINDER, DELETE_REMINDER } from '../actions/type';

const reminder = (action) => {
    let {text} = action;
    return {
        text,
        id: Math.random()
    }
}

const removeById = (state=[], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reduced reminders', reminders);
    return reminders;
}

export default function(state = [], action) {
    let reminders = null;

	switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            return reminders;
        default:
        return state;
    }
}