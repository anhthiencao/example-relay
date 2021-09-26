export const getTitle = (pathname) =>{
    const name = pathname.split("/")[1];

    const title = name ? name.charAt(0).toUpperCase() + name.slice(1) : "Dashboard";

    return title
}