import { useEffect, useState } from "react";
import { searchCards } from "../../api/HeartstoneApis";
import Layout from "../Layout";


const Home = () => {

    const [cards, setCards] = useState<any>(); 

    const fetchCards = async () => {
        const result = await searchCards("", {params: {locale: "en_US", page: 2}});
        setCards(result.data);
        console.log(result.data);
    }

    useEffect(() => {
        fetchCards();
    }, [])
    

    return <Layout>
        {cards && cards.cards.map((item: any) => {
            return <img src={item.image} alt="" />
        })}
    </Layout>
}

export default Home;