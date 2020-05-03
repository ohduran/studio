import React, { Component } from "react"

export default class StackeddivarsIcon extends Component {
  render() {
    return (
      <div
        className="bg-gray-900 grid"
        style={{
          gridTemplateRows: "repeat(8, 1fr)",
          gridTemplateColumns: "repeat(26, 1fr)",
          height: "50vh",
          marginTop: "25vh",
        }}
      >
        <div
          id="purple"
          className="py-2 bg-purple-600 row-start-1 col-start-4 col-end-17"
        ></div>
        <div
          id="purple-opacity"
          className="py-2 bg-purple-800 row-start-1 col-start-17 col-end-18"
        ></div>
        <div
          id="red"
          className="py-2 bg-red-600 row-start-2 col-start-2 col-end-16"
        ></div>
        <div
          id="green-opacity"
          className="py-2 bg-green-600 row-start-3 col-start-6 col-end-7"
        ></div>
        <div
          id="green"
          className="py-2 bg-green-400 row-start-3 col-start-7 col-end-25"
        ></div>
        <div
          id="yellow"
          className="py-2 bg-yellow-300 row-start-4 col-start-5 col-end-19"
        ></div>
        <div
          id="black-teal"
          className="py-2 bg-teal-500 row-start-5 col-start-1 col-end-5"
        ></div>
        <div
          id="black-teal-opacity"
          className="py-2 bg-teal-700 row-start-5 col-start-5 col-end-6"
        ></div>
        <div
          id="orange"
          className="py-2 bg-orange-400 row-start-5 col-start-9 col-end-20"
        ></div>
        <div
          id="orange-opacity"
          className="py-2 bg-orange-600 row-start-5 col-start-20 col-end-21"
        ></div>
        <div
          id="pink"
          className="py-2 bg-pink-500 row-start-6 col-start-3 col-end-22"
        ></div>
        <div
          id="pink-opacity"
          className="py-2 bg-pink-700 row-start-6 col-start-22 col-end-23"
        ></div>
        <div
          id="light-teal-opacity"
          className="py-2 bg-teal-500 row-start-7 col-start-7 col-end-8"
        ></div>
        <div
          id="light-teal"
          className="py-2 bg-teal-300 row-start-7 col-start-8 col-end-26"
        ></div>
        <div
          id="brown"
          className="py-2 bg-orange-800 row-start-8 col-start-6 col-end-21"
        ></div>
        <span
          className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl font-family-zilla text-white row-start-5 row-end-7 col-start-11 col-end-19 bg-gray-900 px-1"
          style={{
            alignSelf: "center",
            justifySelf: "stretch",
          }}
        >
          Álvaro Durán
        </span>
        <span
          className="text-center sm:text-lg md:text-xl lg:text-2xl  font-family-zilla text-white row-start-7 col-start-15 col-end-22"
          style={{
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          In the Studio
        </span>
      </div>
    )
  }
}
