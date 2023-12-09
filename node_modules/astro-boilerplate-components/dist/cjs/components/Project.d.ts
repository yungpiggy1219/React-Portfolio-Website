import type { ReactNode } from 'react';
type IProjectProps = {
    img: {
        src: string;
        alt: string;
    };
    name: string;
    description: string;
    link: string;
    category: ReactNode;
};
declare const Project: (props: IProjectProps) => import("react/jsx-runtime").JSX.Element;
export { Project };
