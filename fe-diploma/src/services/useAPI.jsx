import { useEffect, useState } from 'react';


const useAPI = (url) => {
    const [result, setResult] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        let boo = false;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!boo) {
                    setResult(data);
                    setLoading(false);
                }
            })
            .catch(e => {
                if (!boo) {
                    setError(e.message);
                    setLoading(false);
                }
            })
        return () => {
            boo = true;
        };
    }, [url]);


    return { result, isLoading, error };
};

export default useAPI;