import { useParams } from "react-router-dom"

export const SocialNetworks = () => {

    const {user} = useParams();
    console.log(user);

  return (
    <h1>Hilos Mundo Mundial</h1>
  )
}
