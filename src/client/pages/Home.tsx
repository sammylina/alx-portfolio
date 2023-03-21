import { useEffect, useState } from "react";
import {remult} from 'remult'
import Tweet from "../../shared/Tweet";
import TweetBox from "../components/TweetBox";
import CreateTweet from "../components/CreateTweet";

const tweetRepo = remult.repo(Tweet)

export default function MainView() {

    const [tweets, setTweets] = useState<Tweet[]>([])

    useEffect(() => {
        tweetRepo.find({
            orderBy: {postedAt: 'asc'}
        }).then(setTweets)
    }, [])

    const postTweet = async (value: string) => {
        const tweet = {
            value,
        }
        try {
            const newTweet = await tweetRepo.insert(tweet);
            setTweets([newTweet, ...tweets])
        }catch(e: any) {
            console.log('POST_TWEET_ERROR: ', e.message)
        }
    }
    return (
        <>
            <h3>Home</h3>
            <CreateTweet postTweet={postTweet}/>
            <div>
            {
                tweets.map(t => {
                    return (
                        
                            <TweetBox key={t.id} id={t.id} value={t.value}></TweetBox>
                    
                    )
                })
            }
            </div>
        </>
           
    )
}