import { PropsWithChildren } from "react";
import Nav from "./Nav";


const Layout = (props: PropsWithChildren) => {
    return <>
        <Nav />
        {props.children}
    </>
}

export default Layout;