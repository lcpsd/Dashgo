import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement, ReactNode } from "react";

interface ActiveLinksProps extends LinkProps{
    children: ReactElement;
}

export function ActiveLink({children, ...rest}: ActiveLinksProps){

    const {asPath} = useRouter()
    
    let isActive = false

    asPath == rest.href || String(asPath).includes(String(rest.href)) 
    && (isActive = true)

    return(
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? "pink.400" : "gray.50"
            })}
        </Link>
    )
}