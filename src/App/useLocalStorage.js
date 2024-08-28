import React from 'react';

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItm;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                }
                else {
                    parsedItm = JSON.parse(localStorageItem);
                    setItem(parsedItm);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
                setSincronizedItem(true);
            }
        }, 1000);
    }, [sincronizedItem]);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    const sincronize = ()=>{
        setSincronizedItem(false);
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronize,
    };
}