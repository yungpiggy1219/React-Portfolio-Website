import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from '../types/IFrontMatter';
type IRecentPostsProps = {
    postList: MarkdownInstance<IFrontmatter>[];
};
declare const BlogGallery: (props: IRecentPostsProps) => import("react/jsx-runtime").JSX.Element;
export { BlogGallery };
