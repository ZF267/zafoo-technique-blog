import React from 'react';
import '../../../css/home/homebanner.css';

export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-me">
          <div className="home-banner-photo">
            <img src="./src/img/touxiang.jpg" alt="??" />
          </div>
          <div className="home-banner-desc">
            <h1>Zafoo's Blog</h1>
            <p>A passionate frontend developer</p>
            
            <div className="home-banner-link">
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ZF267/zafoo-technique-blog">Github</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="./Resume--Zhefu Han_network.pdf">Online resume</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="">Photo Albums</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}