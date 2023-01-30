import { useSelector } from "react-redux";
import { RootState } from "store";
import { useWebSocketBroker } from "services/WebSocketBroker/useWebSocketBroker";

import { useDispatch } from "react-redux";
import { updateBoardConnectionsArray } from "slices/connectionsSlice";

export function useConnections() {
    const dispatch = useDispatch();

    useWebSocketBroker("connection/update", (msg) => {
        let connections = JSON.parse(msg);
        dispatch(updateBoardConnectionsArray(connections));
    });

    return useSelector((state: RootState) => state.connections);
}
