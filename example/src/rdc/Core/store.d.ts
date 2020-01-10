/// <reference types="react" />
declare const connectController: (Component: any) => (props: any) => JSX.Element;
declare const register: (componentName: string) => (Component: any) => (props: any) => JSX.Element;
export { register, connectController };
