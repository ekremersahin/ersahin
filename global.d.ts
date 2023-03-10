import { Component } from "movijs";

declare global {
    namespace JSX {
        interface Element extends Component<any, any> { }
        interface ElementClass extends Component<any,any> {
            build();
        }
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }
 
        interface IntrinsicElements {
            // HTML
            yarabbi: HTMLAnchorElement;
        
        }
    }
}