import React from 'react';
import request from 'superagent';
import './Instagram.css';
var ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

class Instagram extends React.Component {
  state = {
    photos: []
  }

  componentDidMount(){
    this.fetchPhotos();
    this.updateAccessToken();
  }

  fetchPhotos() {
    request
      .get('https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,username,timestamp&access_token=' + ACCESS_TOKEN)
      .then((res) => {
        this.setState({
          photos: res.body.data
        })
      })
      .catch((err) => {console.log(err)});
  }

  updateAccessToken() {
    request
    .get('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' + ACCESS_TOKEN)
    // .then((res) => {
    //   console.log(res.body)
    // })
    .catch((err) => {console.log(err)});
  }


  updateDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  render() {
    if(this.state.photos.length > 0) {
      return (
        <div className="instagram-container">
          <header className="instagram-header">
            <h1>Follow us on Instagram</h1>
          </header>
          <div className='scrolling-wrapper'>
          <div className="instagram-feed">
            {this.state.photos.slice(0,10).map((photo, key) => {
              return (
                <div className="instagram-photo-container" key={photo.id}>
                  <a href={photo.permalink} target="_blank" rel="noreferrer">
                    {photo.media_type !== "IMAGE" &&
                      <video className="instagram-photo" src={photo.media_url} alt={photo.caption !== null ? photo.caption : ''}/>
                    }
                    {photo.media_type === "IMAGE" &&
                      <img className="instagram-photo" src={photo.media_url} alt={photo.caption !== null ? photo.caption : ''}/>
                    }
                    <div className="instagram-overlay">
                      <div className="instagram-title">{photo.caption !== null ? photo.caption : ''}</div>
                      <div className="instagram-date">{this.updateDate(`${photo.timestamp}`)}</div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
          </div>
        </div>
      )
    }
    if(this.state.photos.length === 0) {
      return (
        <div></div>
      )
    }
  }
}

export default Instagram;