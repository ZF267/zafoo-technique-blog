import React from 'react';
import '../../css/about/about.css';

export default class About extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div className="main" ref={node => this.node = node} >
        <div className="main-container about-container" >
          <div className="about-detial about-desc">
            <h1>About myself</h1>
            <ul>
              <li>A new grad master student from Northeastern University</li>
              <li>Graduated in this summer</li>
              <li>While finding job, I keep bodybuilding, learning cooking</li>
              <li>and support Celtics in playoffs</li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-contact">
            <h1>Contact me</h1>
            <ul>
              <li>Homepage:<a target="_blank" rel="noopener noreferrer" href="http://zafoo.net">http://zafoo.net</a></li>
              <li>Github:<a target="_blank" rel="noopener noreferrer" href="https://github.com/ZF267">https://github.com/ZF267</a></li>
              <li>Email: han.jeffw@gmail.com</li>
              <li>LinkedIn:www.linkedin.com/in/zhefu-han-aba143127</li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-friend">
            <h1>Others</h1>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://zafoo.net">Homepage</a></li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-cv">
            <h1>My resume</h1>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="http://zafoo.net/techblog/Resume--Zhefu Han_network.pdf">Frontend Developer_ZF.pdf</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
