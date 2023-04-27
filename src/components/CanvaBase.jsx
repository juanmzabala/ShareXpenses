import "../stylesheets/CanvaBase.css";
import { useContext } from "react";
import { DisplayContext } from "../context/ContextProvider";
import AddView from "./AddView";
import ShowView from "./ShowView";
import EditView from "./EditView";

function CanvaBase() {
    const { screenView } = useContext(DisplayContext);

    if (screenView === "add") {
        return <AddView />;
    }
    if (screenView === "show") {
        return <ShowView />;
    }
    if (screenView === "edit") {
        return <EditView />;
    }
}

export default CanvaBase;
