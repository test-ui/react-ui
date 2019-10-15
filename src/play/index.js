import React from 'react';
import "./index.css"
import img1 from "./image/a.png"
import img2 from "./image/b.jpg"
import img3 from "./image/c.jpeg"
import img4 from "./image/d.JPG"

class ImgWrap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 3
        }
        this.imgBoxRefUp = React.createRef()
        this.imgItemRefUp = React.createRef()

        this.imgBoxRefDown = React.createRef()
        this.imgItemRefDown = React.createRef()

        this.imgBoxRefLeft = React.createRef()
        this.imgItemRefLeft = React.createRef()

        this.imgBoxRefRight = React.createRef()
        this.imgItemRefRight = React.createRef()
    }

    componentDidMount() {
        const tarDomDown = this.imgBoxRefDown.current
        const tarDomRight= this.imgBoxRefRight.current
        this.transformUp()

        tarDomDown.scrollTop = 800
        tarDomRight.scrollLeft = 800
        this.transformDown()

        this.transformLeft()

        this.transformRight()
    }

    pause = type => {
        clearInterval(this[`timer${type}1`])
        clearInterval(this[`timer${type}2`])
        clearInterval(this[`timer${type}3`])
    }

    continue = type => {
        this[`transform${type}`]()
    }

    transformUp = () => {
        const { step } = this.state
        const tarDom = this.imgBoxRefUp.current // 往上盒子外层容器
        const sH = this.imgItemRefUp.current.clientHeight // 图片高度
        this.timerUp1 = setInterval(() => {
            tarDom.scrollTop++

            if (tarDom.scrollTop / sH === 4) {
                tarDom.scrollTop = 0
                this.timerUp2 = setTimeout(() => {
                    this.transformUp()
                }, 1000)
            }

            if (tarDom.scrollTop % sH === 0) {
                clearInterval(this.timerUp1)
                clearInterval(this.timerUp2)
                this.timerUp3 = setTimeout(() => {
                    this.transformUp()
                }, 1000)
            }
        }, step)
    }

    transformDown = () => {
        const { step } = this.state
        const tarDom = this.imgBoxRefDown.current // 往下盒子外层容器
        const sH = this.imgItemRefDown.current.clientHeight // 图片高度
        this.timerDown1 = setInterval(() => {
            tarDom.scrollTop--

            if (tarDom.scrollTop / sH === 0) {
                tarDom.scrollTop = 800
                this.timerDown2 = setTimeout(() => {
                    this.transformDown()
                }, 1000)
            }

            if (tarDom.scrollTop % sH === 0) {
                clearInterval(this.timerDown1)
                clearInterval(this.timerDown2)
                this.timerDown3 = setTimeout(() => {
                    this.transformDown()
                }, 1000)
            }
        }, step)
    }

    transformLeft = () => {
        const { step } = this.state
        const tarDom = this.imgBoxRefLeft.current // 往上盒子外层容器
        const sW = this.imgItemRefLeft.current.clientWidth // 图片高度
        this.timerLeft1 = setInterval(() => {
            tarDom.scrollLeft++

            if (tarDom.scrollLeft / sW === 4) {
                tarDom.scrollLeft = 0
                this.timerLeft2 = setTimeout(() => {
                    this.transformLeft()
                }, 1000)
            }

            if (tarDom.scrollLeft % sW === 0) {
                clearInterval(this.timerLeft1)
                clearInterval(this.timerLeft2)
                this.timerLeft3 = setTimeout(() => {
                    this.transformLeft()
                }, 1000)
            }
        }, step)
    }

    transformRight = () => {
        const { step } = this.state
        const tarDom = this.imgBoxRefRight.current // 往上盒子外层容器
        const sW = this.imgItemRefRight.current.clientWidth // 图片高度
        this.timerRight1 = setInterval(() => {
            tarDom.scrollLeft--

            if (tarDom.scrollLeft / sW === 0) {
                tarDom.scrollLeft = 800
                this.timerRight2 = setTimeout(() => {
                    this.transformRight()
                }, 1000)
            }

            if (tarDom.scrollLeft % sW === 0) {
                clearInterval(this.timerRight1)
                clearInterval(this.timerRight2)
                this.timerRight3 = setTimeout(() => {
                    this.transformRight()
                }, 1000)
            }
        }, step)
    }

    render () {
        return (
           <div className="imgOutContainer">
               <div
                   className="imgContainer"
                   ref={this.imgBoxRefUp}
                   onMouseEnter={() => {
                       this.pause("Up")
                   }}
                   onMouseLeave={() => {
                       this.continue("Up")
                   }}
               >
                   <div className="imgBox">
                       <img src={img1} alt={""} className="imgItem" ref={this.imgItemRefUp} />
                       <img src={img2} alt={""} className="imgItem" />
                       <img src={img3} alt={""} className="imgItem" />
                       <img src={img4} alt={""} className="imgItem" />
                       <img src={img1} alt={""} className="imgItem" />
                   </div>
               </div>

               <div
                   className="imgContainer"
                   ref={this.imgBoxRefDown}
                   onMouseEnter={() => {
                       this.pause("Down")
                   }}
                   onMouseLeave={() => {
                       this.continue("Down")
                   }}
               >
                   <div className="imgBox">
                       <img src={img1} alt={""} className="imgItem" ref={this.imgItemRefDown} />
                       <img src={img2} alt={""} className="imgItem" />
                       <img src={img3} alt={""} className="imgItem" />
                       <img src={img4} alt={""} className="imgItem" />
                       <img src={img1} alt={""} className="imgItem" />
                   </div>
               </div>

               <div
                   className="imgContainer"
                   ref={this.imgBoxRefLeft}
                   onMouseEnter={() => {
                       this.pause("Left")
                   }}
                   onMouseLeave={() => {
                       this.continue("Left")
                   }}
               >
                   <div className="imgBox">
                       <img src={img1} alt={""} className="imgItem imgItemRow" ref={this.imgItemRefLeft} />
                       <img src={img2} alt={""} className="imgItem imgItemRow" />
                       <img src={img3} alt={""} className="imgItem imgItemRow" />
                       <img src={img4} alt={""} className="imgItem imgItemRow" />
                       <img src={img1} alt={""} className="imgItem imgItemRow" />
                   </div>
               </div>

               <div
                   className="imgContainer"
                   ref={this.imgBoxRefRight}
                   onMouseEnter={() => {
                       this.pause("Right")
                   }}
                   onMouseLeave={() => {
                       this.continue("Right")
                   }}
               >
                   <div className="imgBox">
                       <img src={img1} alt={""} className="imgItem imgItemRow" ref={this.imgItemRefRight} />
                       <img src={img2} alt={""} className="imgItem imgItemRow" />
                       <img src={img3} alt={""} className="imgItem imgItemRow" />
                       <img src={img4} alt={""} className="imgItem imgItemRow" />
                       <img src={img1} alt={""} className="imgItem imgItemRow" />
                   </div>
               </div>
           </div>
        )
    }
}

export default ImgWrap;
