import React from 'react';
import request from 'superagent';
import './Instagram.css';
var ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

class Instagram extends React.Component {
  state = {
    photos: []
  }

  componentDidMount(){
    console.log(ACCESS_TOKEN);
    this.fetchPhotos();
  }

  fetchPhotos() {
    request
      .get('https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,username,timestamp&access_token=' + ACCESS_TOKEN)
      .then((res) => {
        this.setState({
          photos: res.body.data
        })
      })
  }

  updateDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(date).toLocaleDateString(undefined, options)
  }
  

  render() {
    return (
      <div className="instragram-container">
        <header className="instagram-header">
          <h1>Follow us on Instagram</h1>
        </header>
        <div className="instagram-feed">
          {this.state.photos.slice(0,5).map((photo, key) => {
            return (
              <div className="instagram-photo-container" key={photo.id}>
                <a href={photo.permalink} target="_blank" rel="noreferrer">
                  <img className="instagram-photo" src={photo.media_url} alt={photo.caption !== null ? photo.caption : ''}/>
                  <div className="instagram-overlay">
                    <div className="instagram-title">{photo.caption !== null ? photo.caption : ''}</div>
                    <div className="instagram-date">{this.updateDate(`${photo.timestamp}`)}</div>
                  </div>
                </a>
              </div>
            )
          })}
          {console.log(this.state.photos)}
        </div>
      </div>
    )
  }
}

export default Instagram;
