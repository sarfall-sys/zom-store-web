
import { useState, useEffect } from "react";
import botService from "../services/botService";
function useBot() {

    const [message, setMessage] = useState("");
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendStateToBot = async ({message}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await botService.sendState({message});
            console.log(response);

            setMessage(response.message);
            setOptions(response.options || []);
        } catch (err) {
            setError(err?.message || "Failed to communicate with the bot.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Initial bot message
        sendStateToBot({message: "start"});
    }, []);

    return {
        message,
        options,
        loading,
        error,
        sendStateToBot,
    };

}

export default useBot;
