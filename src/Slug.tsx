import { useParams } from "react-router-dom"

export const Params = () => {
    const params = useParams();
    const id = params.slug;
    return (id)
}