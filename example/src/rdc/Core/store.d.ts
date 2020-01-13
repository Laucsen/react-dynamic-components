/// <reference types="react" />
import { GetChildren } from './interfaces';
declare const connectController: (Component: any) => (props: any) => JSX.Element;
declare const register: (componentName: string, componentStructureSchema?: any, componentDataSchema?: any, compoentChildrens?: GetChildren) => (Component: any) => (props: any) => JSX.Element;
export { register, connectController };
