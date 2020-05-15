import React, { Component } from "react"

export default class StackeddivarsIcon extends Component {
  render() {
    return (
      <>
        <div className="bg-gray-900 p-20">
          <div
            className="grid "
            style={{
              gridTemplateRows: "repeat(8, 1fr)",
              gridTemplateColumns: "4fr repeat(25, 1fr)",
              marginTop: "10vh",
            }}
          >
            <div
              id="purple"
              className="bg-purple-600 row-start-1 col-start-4 col-end-17"
            ></div>
            <div
              id="purple-opacity"
              className="bg-purple-800 row-start-1 col-start-17 col-end-18"
            ></div>
            <div
              id="red"
              className="bg-red-600 row-start-2 col-start-2 col-end-16"
            ></div>
            <div
              id="green-opacity"
              className="bg-green-600 row-start-3 col-start-6 col-end-7"
            ></div>
            <div
              id="green"
              className="bg-green-400 row-start-3 col-start-7 col-end-25"
            ></div>
            <div
              id="yellow"
              className="bg-yellow-300 row-start-4 col-start-5 col-end-19"
            ></div>
            <div
              id="black-teal"
              className="bg-teal-500 row-start-5 col-start-1 col-end-5"
            ></div>
            <div
              id="black-teal-opacity"
              className="bg-teal-700 row-start-5 col-start-5 col-end-6"
            ></div>
            <div
              id="orange"
              className="bg-orange-400 row-start-5 col-start-9 col-end-20"
            ></div>
            <div
              id="orange-opacity"
              className="bg-orange-600 row-start-5 col-start-20 col-end-21"
            ></div>
            <div
              id="pink"
              className="bg-pink-500 row-start-6 col-start-3 col-end-22"
            ></div>
            <div
              id="pink-opacity"
              className="bg-pink-700 row-start-6 col-start-22 col-end-23"
            ></div>
            <div
              id="light-teal-opacity"
              className="bg-teal-500 row-start-7 col-start-7 col-end-8"
            ></div>
            <div
              id="light-teal"
              className="bg-teal-300 row-start-7 col-start-8 col-end-26"
            ></div>
            <div
              id="brown"
              className="bg-orange-800 row-start-8 col-start-6 col-end-21"
            ></div>
            <span
              className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl font-family-zilla text-white row-start-5 row-end-7 col-start-11 col-end-19 bg-gray-900 px-1"
              style={{
                alignSelf: "center",
                justifySelf: "stretch",
              }}
            >
              Álvaro Durán
            </span>
            <span
              className="text-center sm:text-lg md:text-xl lg:text-2xl font-family-zilla text-white row-start-7 col-start-15 col-end-22"
              style={{
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              In the Studio
            </span>
          </div>
        </div>
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill-opacity="1"
            d="M0,256L48,224C96,192,192,128,288,96C384,64,480,64,576,106.7C672,149,768,235,864,250.7C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </>
    )
  }
}
