import { useEffect } from "react";
import * as OverlayScrollbars from "overlayscrollbars";

const config = {
    scrolbars: {
        visibility: "auto",
        autoHide: "never"
    }
};

const useScrollbar = (root, hasScroll) => {
    useEffect(() => {
        let scrollbars;

        if (root.config && hasScroll) {
            scrollbars = OverlayScrollbars(root.current, config);
        }

        return () => {
            if (scrollbars) {
                scrollbars.destroy();
            }
        }
    }, [root, hasScroll]);
}

export { useScrollbar };