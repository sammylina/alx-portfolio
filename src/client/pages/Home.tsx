import { useEffect, useState } from "react";
import {remult} from 'remult'
import Tweet from "../../shared/Tweet";
import TweetBox from "../components/Tweet";

const tweetRepo = remult.repo(Tweet)

export default function MainView() {

    const [tweets, setTweets] = useState<Tweet[]>([])

    useEffect(() => {
        tweetRepo.find().then(setTweets)
    }, [])
    return (
        <>
            <h3>Home</h3>
            <div>
            {
                tweets.map(t => {
                    return (
                        <>
                            <TweetBox key={t.id} id={t.id} value={t.value}></TweetBox>
                        </>
                    )
                })
            }
            </div>
        </>
           
    )
}