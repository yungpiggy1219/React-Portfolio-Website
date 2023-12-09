import type { IFrontmatter } from '../types/IFrontMatter';
type IPostHeaderProps = {
    content: IFrontmatter;
    author: string;
};
declare const PostHeader: (props: IPostHeaderProps) => import("react/jsx-runtime").JSX.Element;
export { PostHeader };
