import {useState, useEffect} from 'react'
import {DataMock} from "../../models/user.js";
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        if (!url) return;
        setLoading(true);
        async function fetchData() {
            try {
                const mockedData = new DataMock(url);
                const data = await mockedData.getData();
                setData(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return {isLoading, data, error};
}