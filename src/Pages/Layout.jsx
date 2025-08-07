import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <div>NavBar</div>
            <hr />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
