import React from 'react';
import { reducer, initialState, actionTypes } from './useReducer';

export function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const { item, loading, error, sincronizedItem } = state;

    const onError = (error) => dispatch({ type: actionTypes.error, payload: error });

    const onSucces = (parsedItem) => dispatch({ type: actionTypes.succes, payload: parsedItem });

    const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

    const onSincronize = () => dispatch({ type: actionTypes.sincronize });

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItm;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItm = initialValue;
                }
                else {
                    parsedItm = JSON.parse(localStorageItem);
                }
                onSucces(parsedItm);
            } catch (error) {
                onError(error);
            }
        }, 1000);
    }, [sincronizedItem]);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            onSave(newItem);
        } catch (error) {
            onError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronize: onSincronize,
    };
}