import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/01-small.jpg", title: "Lorem Ipsum1" },
    { thumb: "img/portfolio/02-small.jpg", title: "Lorem Ipsum2" },
    { thumb: "img/portfolio/03-small.jpg", title: "Lorem Ipsum3" },
    { thumb: "img/portfolio/04-small.jpg", title: "Lorem Ipsum4" },
    { thumb: "img/portfolio/05-small.jpg", title: "Lorem Ipsum5" },
    { thumb: "img/portfolio/06-small.jpg", title: "Lorem Ipsum6" },
    { thumb: "img/portfolio/07-small.jpg", title: "Lorem Ipsum7" },
    { thumb: "img/portfolio/08-small.jpg", title: "Lorem Ipsum8" },
    { thumb: "img/portfolio/09-small.jpg", title: "Lorem Ipsum9" }
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="whitelist" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Whitelist</h2>
        </div>
        <div className="row">
          <div className="wl-text">
            <p className="first-ph">The Metalife whitelist will have room for 500 people. <br/>Being on the list will guarantee an exclusive presale for all the whitelisted members. <br/><br/>These 500 will be selected as follows:</p>
            <br/>
            <ul>
              <li>
                <p>🚀 <span>1000</span> first people to invite at least 10 friends to the Metalife Discord server.<br/> Check conditions in our Discord!</p>
              </li>
              <br/>
              <li>
               <p>🚀 <span>250</span> lucky people in our 5 Twitter contests. 50 people for each contest. Stay tuned!</p> 
              </li>
              <br/>
              <li>
                <p>🚀 <span>250</span> reserved for Discord giveaways, partnerships and other stuff</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
