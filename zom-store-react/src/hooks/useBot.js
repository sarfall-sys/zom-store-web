
import { useState, useEffect, use } from "react";
import botService from "../services/botService";
function useBot() {

    const [message, setMessage] = useState("");
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendStateToBot = async (state) => {
        setLoading(true);
        setError(null);
        try {
            const response = await botService.sendState(state);
            setMessage(response.data.message);
            setOptions(response.data.options || []);
        } catch (err) {
            setError("Failed to communicate with the bot.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Initial bot message
        sendStateToBot("start");
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
