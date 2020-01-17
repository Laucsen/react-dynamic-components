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
            properties: {
                color: {
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
                            required: string[];
                        };
                    };
                    required: string[];
                };
            };
        };
    };
    required: string[];
};
export default _default;
