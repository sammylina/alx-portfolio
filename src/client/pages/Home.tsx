import { useEffect, useState } from "react";
import {remult} from 'remult'
import Tweet from "../../shared/Tweet";
import TweetBox from "../components/TweetBox";
import Feed from '../components/Feed'
import CreateTweet from "../components/CreateTweet";
import Header from '../components/Header';
import User from "../../shared/User";

const tweetRepo = remult.repo(Tweet)

interface authProps {
    username: string,
    loggedIn: boolean,
    setLoggedIn: (loggedIn: boolean) => void,
    setCurrentUser: (username: string) => void,
    setShowLogin: (show: boolean) => void,
    setShowRegister: (show: boolean) => void,
}

export default function MainView({username, loggedIn, setShowLogin, setShowRegister, setLoggedIn, setCurrentUser}: authProps) {

    const [tweets, setTweets] = useState<Tweet[]>([])

    useEffect(() => {
        // check if there is loggedin user initialy
        fetch('/api/currentUser').then(async res => {
            remult.user = await res.json()
            if (remult.user) {
                setLoggedIn(true)
                const currentUser = remult.user.name || '';
                setCurrentUser(currentUser)
            }
            setLoggedIn(false)
            setCurrentUser('')

        }).catch(err => {
            alert(err.message)
        })

        // Update the tweets with out reloading
        return tweetRepo.liveQuery({
            orderBy: {postedAt: 'desc'}
        }).subscribe(info => {
            setTweets(info.applyChanges)
        })
    }, [])

    const postTweet = async (value: string) => {

        // conver session user to Remult User object
        const newUser = await remult.repo(User).fromJson(remult.user)
        const tweet = {
            usr: newUser,
            value
        }
        try {
            await tweetRepo.insert(tweet);
        }catch(e: any) {
            alert(e.message)
        }
    }
    return (
        <div className='bg-grey-30 border-r'>
            <Header username={username} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} showRegisterDialog={setShowRegister} showLoginDialog={setShowLogin}/>
            <Feed>
                {loggedIn && (<CreateTweet postTweet={postTweet}/>)}
                <div className='border-b'></div>
                {
                    tweets.map(({id, value, postedAt, usr}) => {

                        return <TweetBox key={id} id={id} value={value} user={usr}  postedAt={postedAt}/>
                    })
                }
            </Feed>
            
        </div>
    )
}
