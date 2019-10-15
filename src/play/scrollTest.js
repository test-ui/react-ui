import React from 'react';
import "./scrollTest.css"

const ary = [
    "1- 关关雎鸠，在河之洲。",
    "2- 窈窕淑女，君子好逑。",
    "3- 参差荇菜，左右流之。",
    "4- 窈窕淑女，寤寐求之。",
    "5- 求之不得，寤寐思服。",
    "6- 悠哉悠哉，辗转反侧。",
    "7- 参差荇菜，左右采之。",
    "8- 窈窕淑女，琴瑟友之。",
    "9- 参差荇菜，左右芼之。",
    "10- 窈窕淑女，钟鼓乐之。",
    "1-  关关雎鸠，在河之洲。",
]
// 创建style标签
let  style = document.createElement("style")

const setKeyFrames = () => {
    let len = ary.length
    let str = "@keyframes rowup{"

    for (let k = 0; k < len; k++) {
        if (k < len) {
            str += `${100 / len * k}%{top: -${24 * k}px}`
            str += `${100 / len * (5 + 6 * k) / 6}%{top: -${24 * k}px}`
        } else {
            str += `${100 / len * k}%{top: calc(-100% + 24px)}`
            str += `${100 / len * (5 + 6 * k) / 6}%{top: calc(-100% + 24px)}`
        }
    }
    str += "}"
    const runkeyframes = str
    // 设置style属性
    style.type = "text/css"
    // 将 keyframes样式写入style内
    style.innerHTML = runkeyframes
    // 将style样式存放到head标签
    document.getElementsByTagName("head")[0].appendChild(style)
}

function ScrollTest() {
    const step = 1

    setKeyFrames()

    return (
        <div className="App">
            <div className="list">
                <div className="shadow" />
                <ul
                    className="target"
                    style={{
                        animation:
                            `${(ary.length - 1) * step}s rowup linear infinite normal`}}
                >
                    {ary.map((i, t) => {
                        return (
                          <li className="item" key={t}>{i}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ScrollTest;
