//ACTION TYPE

export const VALUE_UPDATE = 'VALUE_UPDATE';

export const READ_LATER = 'READ_LATER';


//ACTION

export const valueUpdate = (value) => {
    return {
        type: VALUE_UPDATE,
        data: value,
    };
};

export const readLater = (value) => {
    return {
        type: READ_LATER,
        data: value,
    }
}