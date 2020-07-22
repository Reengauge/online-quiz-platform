import React from "react";

export default (Comp: any) => () => (
    <div className="example-warper">
        <Comp />
    </div>
);
