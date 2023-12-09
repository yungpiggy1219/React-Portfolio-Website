import type { ReactNode } from 'react';
type IHeroAvatarProps = {
    title: ReactNode;
    description: ReactNode;
    avatar: ReactNode;
    socialButtons: ReactNode;
};
declare const HeroAvatar: (props: IHeroAvatarProps) => import("react/jsx-runtime").JSX.Element;
export { HeroAvatar };
