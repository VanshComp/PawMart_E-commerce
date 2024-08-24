import React from "react";
import dog from "../assets/img/dog.png";
import cat from "../assets/img/kitty.png";
import bird from "../assets/img/bird.png";
import wateranimals from "../assets/img/sea-life.png";
import reptiles from "../assets/img/chameleon.png";
import smallanimals from "../assets/img/farmer.png";
import GoldenRetriever from "../assets/img/golden-retriever.jpg";
import SiberianHusky from "../assets/img/siberian-husky.jpg";
import RagdollCat from "../assets/img/ragdoll-cat.jpg";
import Rotweiller from "../assets/img/rottweiler.jpg";
import FourStar from "../assets/img/fourstar.png";
import FiveStar from "../assets/img/fivestar.png";

export default function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <div className="Sidebar-categories">
          <p className="Sidebar-p">Category</p>
          <div className="Sidebar-category">
            <div className="SidebarS">
              <img className="Sidebar-img" src={dog} alt="" />
              <p className="Sidebar-p1">Dogs</p>
            </div>
            <span className="Sidebar-span">+</span>
          </div>
          <div className="Sidebar-category">
            <div className="SidebarS">
              <img className="Sidebar-img" src={cat} alt="" />
              <p className="Sidebar-p1">Cats</p>
            </div>
            <span className="Sidebar-span">+</span>
          </div>
          <div className="Sidebar-category">
            <div className="SidebarS">
              <img className="Sidebar-img" src={bird} alt="" />
              <p className="Sidebar-p1">Birds</p>
            </div>
            <span className="Sidebar-span">+</span>
          </div>
          <div className="Sidebar-category">
            <div className="SidebarS">
              <img className="Sidebar-img" src={wateranimals} alt="" />
              <p className="Sidebar-p1">Water Animals</p>
            </div>
            <span className="Sidebar-span">+</span>
          </div>
          <div className="Sidebar-category">
            <div className="SidebarS">
              <img className="Sidebar-img" src={reptiles} alt="" />
              <p className="Sidebar-p1">Reptiles</p>
            </div>
            <span className="Sidebar-span">+</span>
          </div>
          <div className="Sidebar-category">
            <div className="SidebarS">
              <img className="Sidebar-img" src={smallanimals} alt="" />
              <p className="Sidebar-p1">Small Animals</p>
            </div>
            <span className="Sidebar-span">+</span>
          </div>
        </div>
        <div className="Sidebar-mostloved">
            <p className="Sidebar-p2">Most Loved</p>
            <div className="Sidebar-loved">
                <img className="Sidebar-loved-pets" src={GoldenRetriever} alt=""/>
                <div className="Sidebar-lovedinfo">
                    <p className="Sidebar-p3">Golden Retriever</p>
                    <img className="Sidebar-stars" src={FiveStar} alt=""/>
                </div>
                <div className="Sidebar-costs">
                    <p className="Sidebar-prevcost">100$</p>
                    <p className="Sidebar-newcost">75$</p>
                </div>
            </div>
            <div className="Sidebar-loved">
                <img className="Sidebar-loved-pets" src={SiberianHusky} alt=""/>
                <div className="Sidebar-lovedinfo">
                    <p className="Sidebar-p3">Siberian Husky</p>
                    <img className="Sidebar-stars" src={FourStar} alt=""/>
                </div>
                <div className="Sidebar-costs" style={{marginLeft:"-125px"}}>
                    <p className="Sidebar-prevcost">85$</p>
                    <p className="Sidebar-newcost">55$</p>
                </div>
            </div>
            <div className="Sidebar-loved">
                <img className="Sidebar-loved-pets" src={RagdollCat} alt=""/>
                <div className="Sidebar-lovedinfo">
                    <p className="Sidebar-p3">Ragdoll Cat</p>
                    <img className="Sidebar-stars" src={FiveStar} alt=""/>
                </div>
                <div className="Sidebar-costs" style={{marginLeft:"-95px"}}>
                    <p className="Sidebar-prevcost">125$</p>
                    <p className="Sidebar-newcost">95$</p>
                </div>
            </div>
            <div className="Sidebar-loved">
                <img className="Sidebar-loved-pets" src={Rotweiller} alt=""/>
                <div className="Sidebar-lovedinfo">
                    <p className="Sidebar-p3">Rottweiler</p>
                    <img className="Sidebar-stars" src={FourStar} alt=""/>
                </div>
                <div className="Sidebar-costs" style={{marginLeft:"-95px"}}>
                    <p className="Sidebar-prevcost">115$</p>
                    <p className="Sidebar-newcost">85$</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
