type INavMenuItemProps = {
    href: string;
    children: string;
    target?: '_blank' | '_self' | '_parent' | '_top' | string;
};
declare const NavMenuItem: (props: INavMenuItemProps) => import("react/jsx-runtime").JSX.Element;
export { NavMenuItem };
