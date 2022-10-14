import { useParams } from "react-router-dom"

export const Profile = () => {

    const {user} = useParams();

  return (
    <h1>Hilos Mundo Mundial {user}</h1>
  )
}
