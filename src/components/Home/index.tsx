import { useEffect, useState } from "react";
import { searchCards } from "../../api/HeartstoneApis";


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
    

    return <div>
        {cards && cards.cards.map((item: any) => {
            return <img src={item.image} alt="" />
        })}
    </div>
}

export default Home;