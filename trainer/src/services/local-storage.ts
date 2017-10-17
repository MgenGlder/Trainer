export class LocalStorage {
    getItem<T>(key: string): T {
        if (localStorage[key]) {
            return <T>JSON.parse(localStorage[key]);
        }
        return null;
    }
    setItem(key: string, item: any) {
        localStorage[key] = JSON.stringify(item);
    }
}
//A simple wrapper for the browser's localstorage object.
