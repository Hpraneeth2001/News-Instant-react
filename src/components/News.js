import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  articles=[
    {
      "source": { "id": "nhl-news", "name": "NHL News" },
      "author": "NHL Public Relations",
      "title": "NHL Morning Skate for February 9",
      "description": "The two teams responsible for the last three Stanley Cup championships will be featured tonight on ESPN, TVA Sports, Sportsnet and Sportsnet 360 when the Avalanche visit the Lightning.",
      "url": "https://www.nhl.com/news/nhl-morning-skate-for-february-9/c-340849380",
      "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/340849780/1024x576/cut.jpg",
      "publishedAt": "2023-02-09T14:00:03Z",
      "content": "* The two teams responsible for the last three Stanley Cup championships will be featured tonight on ESPN, TVA Sports, Sportsnet and Sportsnet 360 when the Avalanche visit the Lightning.* Players age… [+5568 chars]"
    },
    {
      "source": { "id": "les-echos", "name": "Les Echos" },
      "author": "Les Echos",
      "title": "Transports défaillants en Ile-de-France : les usagers seront remboursés de la moitié du Pass Navigo",
      "description": "Le réseau Ile-de-France Mobilités annonce un geste pour compenser la multiplication des retards et des suppressions sur les lignes de métro et de RER dans toute la région francilienne en 2022. Certains voyageurs du RER B et D auront une indemnisation plus imp…",
      "url": "https://www.lesechos.fr/industrie-services/tourisme-transport/transports-defaillants-en-ile-de-france-les-usagers-seront-rembourses-de-la-moitie-du-pass-navigo-1905127",
      "urlToImage": "https://media.lesechos.com/api/v1/images/view/63e4f0f48e8648719f045495/1280x720/0703223703108-web-tete.jpg",
      "publishedAt": "2023-02-09T13:10:02Z",
      "content": "Le réseau Ile-de-France Mobilités va rembourser la somme de 37,60 euros à tous ses usagers possédant un Pass Navigo. C'est ce qu'a annoncé ce jeudi la société d'exploitations des transports de la rég… [+2492 chars]"
    },
    {
      "source": { "id": "cbc-news", "name": "CBC News" },
      "author": "CBC News",
      "title": "'It's a childhood dream': Canada's Jack Crawford wins super-G world title | CBC Sports",
      "description": "Canada's Jack Crawford is an alpine skiing world champion. The Toronto native raced his way to the super-G title in Courchevel Méribel, France, on Thursday, edging Norway's Aleksander Aamodt Kilde by one one-hundredth of a second.",
      "url": "http://www.cbc.ca/sports/olympics/winter/alpine-skiing/jack-crawford-gold-medal-super-g-alpine-worlds-1.6742205",
      "urlToImage": "https://i.cbc.ca/1.6742211.1675945773!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1246947083.jpg",
      "publishedAt": "2023-02-09T12:52:19.3378707Z",
      "content": "Canada's Jack Crawford is an alpine skiing world champion.\r\nThe Toronto native raced his way to the super-G title in Courchevel Méribel, France, on Thursday, edging Norway's Aleksander Aamodt Kilde b… [+239 chars]"
    },
    {
      "source": { "id": "four-four-two", "name": "FourFourTwo" },
      "author": "Ryan Dabbs",
      "title": "Sean Dyche forced Everton kit man down to nearest sports shop after banning two items at training ground",
      "description": "Footballers' beloved clothing items have been banned by the no-nonsense boss, forcing the kit man to rush to the nearest shop",
      "url": "https://www.fourfourtwo.com/news/sean-dyche-forced-everton-kit-man-down-to-nearest-sports-shop-after-banning-two-items-at-training-ground",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/e67XnLFAcRapLt3H6eKcBn-1200-80.jpg",
      "publishedAt": "2023-02-09T10:55:04Z",
      "content": "Sean Dyche forced the Everton kit man to make a trip to the closest sports shop to the club's Finch Farm training ground, after the new manager realised there were not enough pairs of socks for train… [+2287 chars]"
    },
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": null,
      "title": "Italian skier Fanchini dies aged 37",
      "description": "Skier Elena Fanchini, from Italy, has died at the age of 37 after a battle with cancer, says the Italian Winter Sports Federation.",
      "url": "http://www.bbc.co.uk/sport/winter-sports/64554304",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/F4AD/production/_128573626_12502193-5399-4b8d-aa52-4db77a4484b8.jpg",
      "publishedAt": "2023-02-09T10:52:45.8216503Z",
      "content": "Fanchini raced with her two younger sisters Nadia and Sabrina on the Italian team\r\nItalian skier Elena Fanchini has died aged 37 after a battle with cancer, the Italian Winter Sports Federation said.… [+877 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Indigenous sports wow crowds at Arctic Winter Games",
      "description": "Alaskan high kick, stick pull and kneel jump were among the competitive games in Canada this year.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64517131",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7D75/production/_128571123_p0f1z2ft.jpg",
      "publishedAt": "2023-02-09T00:22:20.9152358Z",
      "content": "The 2023 Arctic Winter Games in Alberta, Canada, have just come to a close, bringing together thousands of athletes, coaches and volunteers from northern Canada, Alaska, Greenland and Scandinavia. \r\n… [+248 chars]"
    },
    {
      "source": { "id": "fox-sports", "name": "Fox Sports" },
      "author": null,
      "title": "Super Bowl LVII picks: Our experts predict Chiefs-Eagles winner",
      "description": "As the Kansas City Chiefs prepare to face the Philadelphia Eagles in Super Bowl LVII, FOX Sports' experts make their predictions.",
      "url": "http://www.foxsports.com/stories/nfl/super-bowl-lvii-picks-our-experts-predict-chiefs-eagles-winner",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/02/1408/814/2.6.23_Talent-Super-Bowl-Picks_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-02-08T18:55:47Z",
      "content": "The final two teams are set. Patrick Mahomes leads the Kansas City Chiefs against Jalen Hurts and the Philadelphia Eagles in Super Bowl LVII\r\n (Sunday, 6:30 p.m. ET, FOX and the FOX Sports App).\r\nWil… [+9653 chars]"
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": null,
      "title": "&#x27;The Voncast&#x27; with Myles Garrett",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/304730-the-voncast-with-myles-garrett",
      "urlToImage": null,
      "publishedAt": "2022-12-01T18:52:49.4768049Z",
      "content": "Myles Garrett and Von Miller talk playing in the NBA, pick their dream NFL defense and more"
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": null,
      "title": "☄️ NEW ANIME JUST DROPPED ☄️",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/289173-ja-vs-zion-anime",
      "urlToImage": null,
      "publishedAt": "2022-11-14T22:07:16.2323649Z",
      "content": null
    },
    {
      "source": {
        "id": "the-washington-times",
        "name": "The Washington Times"
      },
      "author": "The Washington Times https://www.washingtontimes.com",
      "title": "Latest Quizzes",
      "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
      "url": "https://www.washingtontimes.com/quiz/",
      "urlToImage": null,
      "publishedAt": "2022-08-30T16:37:43.8583104Z",
      "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": null,
      "title": "Daily Briefing",
      "description": "The day's top stories, from sports to movies to politics to world events.",
      "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
      "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      "publishedAt": "2021-08-15T15:35:07+00:00",
      "content": "The day's top stories, from sports to movies to politics to world events."
    }
  ]
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  static defaultProps={
    country:"in",
    pageSize:6,
    category:"general"
  }
   capitalalizeFirstLetter=(String)=>{
          return String.charAt(0).toUpperCase()+String.slice(1);
  }
  constructor(props){
    super(props);
    console.log("Hello I am a news constructor");
    this.state={
         articles: [],
         loading: false,
         page:1,
         totalResults: 0
    }
    document.title=`${this.capitalalizeFirstLetter(this.props.category)} - News Monkey`
  }
   async updateNews(){
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=72d597aa6b9e4350a27014e08883742a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
      let data=await fetch(url);
      this.props.setProgress(30);
      let parsedData= await data.json();
      this.props.setProgress(70);
      console.log(parsedData);
      this.setState({articles:parsedData.articles, 
        totalResults: parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100);
  }
async  componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=72d597aa6b9e4350a27014e08883742a&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    //   let data=await fetch(url);
    //   let parsedData= await data.json();
    //   console.log(parsedData);
    //   this.setState({articles:parsedData.articles, 
    //     totalResults: parsedData.totalResults,
    //   loading:false})
    this.updateNews();
  }
   handlePrevClick= async ()=>{
      //     console.log("Previous");
      // let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=72d597aa6b9e4350a27014e08883742a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true})
      // let data=await fetch(url);
      // let parsedData= await data.json();
      // console.log(parsedData);
      // this.setState({
      //   page: this.state.page-1,
      //   articles:parsedData.articles,
      // loading:false})
      this.setState({page: this.state.page-1});
      this.updateNews();
  }
  handleNextClick= async ()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
    // console.log("Next");
    // let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=72d597aa6b9e4350a27014e08883742a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data=await fetch(url);
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page+1,
    //   articles:parsedData.articles,
    // loading:false})
    // }
    this.setState({page:this.state.page+1});
    this.updateNews();
    }
  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=72d597aa6b9e4350a27014e08883742a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //this.setState({loading: true})
    let data=await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
    //loading:false
  })
    
  };

  render() {
    return (
          <>
            <h1 className="text-center" style={{margin:"35px 0px"}}>NewsMonkey- Top {this.capitalalizeFirstLetter(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    //style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    //inverse={true} //
    hasMore={this.state.articles.length!==this.state.totalResults}
    loader={<Spinner/>}
    //scrollableTarget="scrollableDiv"
  >
    <div className="container">
            <div className="row my-3">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} col={this.props.col}/>
              </div>
            })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between my-4">
            <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
            <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
            </div> */}
            </>
    )
  }
}

export default News
