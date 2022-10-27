import { TNavLink, TNavLinkForView } from "../type/TNavData";

export const UNavLink = (navLink:TNavLink) : TNavLinkForView=>{
    return `/${navLink}` as TNavLinkForView;
}