import AnimalPostScreen from "../../screens/AnimalPost/AnimalPostScreens";
export async function getServerSideProps(context){
    console.log(context.params)
    const{query}=context.params
    const res = await fetch('http://localhost:3001/animals?id=${query}')
    const animal=await res.json()
    console.log(animal[0])
    
    return {
        props: {animal: animal[0]}
    }
}
export default AnimalPostScreen;
