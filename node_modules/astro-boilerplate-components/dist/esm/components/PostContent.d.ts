import type { ReactNode } from 'react';
import type { IFrontmatter } from '../types/IFrontMatter';
type IPostContentProps = {
    content: IFrontmatter;
    children: ReactNode;
};
declare const PostContent: (props: IPostContentProps) => import("react/jsx-runtime").JSX.Element;
export { PostContent };
