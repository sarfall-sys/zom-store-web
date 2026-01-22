import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../../../react-laravel-tutorial/src/components/layouts/DefaultLayout";

const router = createBrowserRouter ([
{
path: "/",
element : <DefaultLayout />,
children: [
    {
    },
    {},
]
}
    

])