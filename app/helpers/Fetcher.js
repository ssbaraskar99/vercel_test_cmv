import axios from "axios";

export default async function Fetcher(url) {

    console.log("Fetchr Called !");
    const {data} = await axios.get(url);
    console.log(data);
    return data

}



