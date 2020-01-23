declare const _default: {
    properties: {
        version: {
            type: string;
        };
        name: {
            type: string;
        };
        title: {
            type: string;
        };
        background: {
            type: string;
            additionalProperties: boolean;
            properties: {
                color: {
                    type: string;
                };
                image: {
                    type: string;
                };
                gradient: {
                    type: string;
                };
            };
        };
        root: {
            tyoe: string;
        };
    };
    additionalProperties: boolean;
    required: string[];
};
export default _default;
