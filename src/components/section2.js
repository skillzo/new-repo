import React from "react";
import "./section2.css";
import ProductCard from "./productCard";
import sectionArray from "./section2Array";
import PodcastCard from "./podcastCard";
import podcastArray from "./podcastArray";

function Section2(props) {
  return (
    <div className="section2-container">
      {/* ///////////////////////////////////// */}
      <div className="section2-body">
        <div className="section2-heading">
          <div className="section-mainheading">
            <h3> Online Communities</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="see-all-button">
            <button className="button3  see-all">See all</button>
          </div>
        </div>

        {/* ///////////////////////////// */}

        <div className="product-management-card">
          {sectionArray.map((card) => {
            return (
              <div>
                <ProductCard
                  key={card.id}
                  title={card.title}
                  numbers={card.numbers}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* ////////////////////////////////////////podcast/////////////////////// */}

      <div className="podcast">
        <div className="podcast-heading">
          <div className="podcast-heading-details">
            <h2> Podcast</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              facere?
            </p>
          </div>
          <div>
            <button className="button3 see-all">See all</button>
          </div>
        </div>

        <div className="podcast-main">
          {podcastArray.map((podcast) => {
            return (
              <div>
                <PodcastCard
                  key={podcast.id}
                  title={podcast.title}
                  timeStamp={podcast.timeStamp}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section2;