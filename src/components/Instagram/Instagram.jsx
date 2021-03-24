import React from 'react';
import request from 'superagent';
import './Instagram.css';
var ACCESS_TOKEN = process.env.ACCESS_TOKEN;

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
      .get('https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,username,timestamp&access_token=' + ACCESS_TOKEN)
      .then((res) => {
        this.setState({
          photos: res.body.data
        })
      })
  }

  render() {
    return (
      <div className="instragram-container">
        <header className="instagram-header">
          <h1>Follow us on Instagram</h1>
        </header>
        <div className="instagram-feed">
          {this.state.photos.map((photo, key) => {
            return (
              <div key={photo.id}>
                <img className="instagram-photo" src={photo.media_url} alt={photo.caption !== null ? photo.caption : ''}/>
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
