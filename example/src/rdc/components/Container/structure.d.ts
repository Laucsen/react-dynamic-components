declare const _default: {
    properties: {
        type: {
            type: string;
        };
        name: {
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
        components: {
            type: string;
            items: {
                type: string;
            };
        };
    };
    additionalProperties: boolean;
    required: string[];
};
export default _default;
