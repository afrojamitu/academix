import { useEffect, useState } from "react"

const useCollege = () =>{
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        fetch('https://academix-server.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data)
            })
    }, [])
    return [colleges];
}

export default useCollege;