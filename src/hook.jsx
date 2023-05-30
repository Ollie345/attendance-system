import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";

export const useFetch = (url) => {
    const [fetchObject, setFetchObject] = useState({
        data: null,
        error: null,
        fetching: true,
        isSuccess: false,
        isError: false,
        statusCode: 0,
    });

    const [cookie, setCookie, removeCookie] = useCookies("token");

    useEffect(() => {
        axios.get(url, {
            withCredentials: true
        }).then((response) => {
            setFetchObject({
                data: response.data,
                error: null,
                fetching: false,
                isSuccess: true,
                isError: false,
                statusCode: response.status
            })
        }).catch((error) => {
            if (axios.isAxiosError(error)) {
                setFetchObject({
                    data: null,
                    error: error.response.data,
                    fetching: false,
                    isSuccess: false,
                    isError: true,
                    statusCode: error.status
                })
            } else {
                setFetchObject({
                    data: null,
                    error: "Some error occured",
                    fetching: false,
                    isSuccess: false,
                    isError: true,
                    statusCode: 0
                })

            }
        });
    }, []);

    return fetchObject;
}