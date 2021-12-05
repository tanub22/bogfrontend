import HomeScreen from "../screens/Home/HomeScreen"
Index.jsx
import BrowseScreen from "../../screens/Browse/BrowseScreen";
export async function getServerSideProps(){
    const response = await fetch("http://localhost:3001/animals")
    const animals = await response.json()
    return {
        props:{
            animals
        }
    }
}
export default BrowseScreen;

