import React from 'react';
import "./tabs.css"
import classNames from "classnames"

class Tabs extends React.Component{

   constructor() {
       super()
       this.state = {
           otherTabList: [
               "TA的作品",
               "TA的工作室",
               "TA的收藏",
               "TA的好友"
           ],
           myTabList: [
               "我的作品",
               "我的工作室",
               "我的收藏",
               "我的好友"
           ],
           translateX: 0,
           activeItem: 0
       }
   }

    tabChange = t => {
        this.setState({ activeItem: t, translateX: t * 138 })
    }

   render() {
       const {otherTabList, myTabList, translateX, activeItem} = this.state
       const {isMine = true} = this.props
       const tabsList = isMine ? myTabList : otherTabList
       return (
           <div className="tabsBox">
               {tabsList.map((i, t) => {
                   return (
                       <span
                           key={t}
                           className={
                              classNames(
                                  "tabItem",
                                  activeItem === t && "activeTabItem"
                              )
                           }
                           onClick={() => {
                               this.tabChange(t)
                           }}
                       >
                           {i}
                       </span>
                   )
               })}
               <div className="lineBox">
                    <span
                        className="line"
                        style={{ transform: `translateX(${translateX}px)`}}
                    />
               </div>
           </div>
       );
   }
}

export default Tabs;
