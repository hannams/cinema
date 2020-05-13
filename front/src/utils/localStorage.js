const storageName = 'userData';

export const getTocken = () => {
    try{
        const serializeState = localStorage.getItem(storageName);
        if (serializeState === null) {
            return {};
        }
        return JSON.parse(serializeState);
    }catch(error){
        console.log("ошибка");
    }
};

export const saveToken = (token) => {
    try{
        const serializeState = JSON.stringify(token);
        localStorage.setItem(storageName, serializeState);
    }catch{}
};

export const removeToken = () => {
    try{
        localStorage.removeItem(storageName);
    }catch{}
};
