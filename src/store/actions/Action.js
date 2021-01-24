//ACTION TYPE

export const VALUE_UPDATE = 'VALUE_UPDATE';


//ACTION

export const valueUpdate = (value) => {
    return {
        type: VALUE_UPDATE,
        data: value
    }
}