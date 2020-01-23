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
        items: {
            type: string;
            items: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        data: {
                            type: string;
                            properties: {
                                mobile: {
                                    type: string;
                                };
                                tablet: {
                                    type: string;
                                };
                                desktop: {
                                    type: string;
                                };
                                component: {
                                    type: string;
                                };
                            };
                            additionalProperties: boolean;
                            required: string[];
                        };
                    };
                    required: string[];
                };
            };
        };
    };
    additionalProperties: boolean;
    required: string[];
};
export default _default;
