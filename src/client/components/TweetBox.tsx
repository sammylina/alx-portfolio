import Tweet from '../../../shared/Tweet'

const TweetBox: React.FC<Tweet> = ({value}): JSX.Element =>  {
    console.log('tweet: ', value)
    return (
        <>
            <h4>Title {value}</h4>
            <p>Message from me</p>
            
        </>
    )
}

export default TweetBox;