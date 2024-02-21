import { useEffect } from "react"
import { useSalesServices } from "../../hooks/useSalesServices"

export const Home = () => {
    const { getSales } = useSalesServices()


    useEffect(() => {
        const getData = async () => {
            const data = await getSales()
            console.log(data)
        }
        getData()
    }, [])

    return (
        <div>Home</div>
    )
}
