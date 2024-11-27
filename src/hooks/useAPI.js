import { useContext } from "react"
import  { DataContext } from "../Helper/Context"

export let useAPI = () => {
    const context = useContext(DataContext);

    if (context == undefined) {
        throw new Error("Context must be used within a Provider");
    }

    return context;

}