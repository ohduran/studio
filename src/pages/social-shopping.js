import React from "react"
import { Link } from "gatsby"

import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

const HeartIcon = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        class="heroicon-ui"
        d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"
      />
    </svg>
  )
}

const HomeIcon = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        d="M18.672,11H17v6c0,0.445-0.194,1-1,1h-4v-6H8v6H4c-0.806,0-1-0.555-1-1v-6H1.328c-0.598,0-0.47-0.324-0.06-0.748L9.292,2.22
      C9.487,2.018,9.743,1.918,10,1.908c0.257,0.01,0.513,0.109,0.708,0.312l8.023,8.031C19.142,10.676,19.27,11,18.672,11z"
      />
    </svg>
  )
}

const CommentIcon = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        class="heroicon-ui"
        d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"
      />
    </svg>
  )
}

const AddToListIcon = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      version="1.1"
      id="Add_to_list"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      enable-background="new 0 0 20 20"
    >
      <path
        d="M19.4,9H16V5.6C16,5,15.6,5,15,5s-1,0-1,0.6V9h-3.4C10,9,10,9.4,10,10s0,1,0.6,1H14v3.4c0,0.6,0.4,0.6,1,0.6s1,0,1-0.6V11
         h3.4c0.6,0,0.6-0.4,0.6-1S20,9,19.4,9z M7.4,9H0.6C0,9,0,9.4,0,10s0,1,0.6,1h6.8C8,11,8,10.6,8,10S8,9,7.4,9z M7.4,14H0.6
         C0,14,0,14.4,0,15s0,1,0.6,1h6.8C8,16,8,15.6,8,15S8,14,7.4,14z M7.4,4H0.6C0,4,0,4.4,0,5s0,1,0.6,1h6.8C8,6,8,5.6,8,5S8,4,7.4,4z"
      />
    </svg>
  )
}

const ShoppingCartIcon = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      version="1.1"
      id="Add_to_list"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      enable-background="new 0 0 20 20"
    >
      <path
        d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17c0,1.104,0.895,2,2,2
	c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01C17.826,8.949,18,8.721,18,8.5V3H4V1.4
	C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4L0,3h2l1.91,8.957L4,12.9v1.649c0,0.219,0.18,0.4,0.4,0.4H17.6
	c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"
      />
    </svg>
  )
}

const BellIcon = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      version="1.1"
      id="Add_to_list"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      enable-background="new 0 0 20 20"
    >
      <path
        d="M14.65,8.512c-2.28-4.907-3.466-6.771-7.191-6.693C6.132,1.846,6.45,0.857,5.438,1.232C4.428,1.607,5.295,2.156,4.261,3.005
	c-2.902,2.383-2.635,4.587-1.289,9.84c0.567,2.213-1.367,2.321-0.602,4.465c0.559,1.564,4.679,2.219,9.025,0.607
	c4.347-1.613,7.086-4.814,6.527-6.378C17.157,9.394,15.611,10.578,14.65,8.512z M10.924,16.595c-3.882,1.44-7.072,0.594-7.207,0.217
	c-0.232-0.65,1.253-2.816,5.691-4.463c4.438-1.647,6.915-1.036,7.174-0.311C16.735,12.467,14.807,15.154,10.924,16.595z
	 M9.676,13.101c-2.029,0.753-3.439,1.614-4.353,2.389c0.643,0.584,1.847,0.726,3.046,0.281c1.527-0.565,2.466-1.866,2.095-2.904
	c-0.005-0.013-0.011-0.023-0.016-0.036C10.197,12.913,9.94,13.002,9.676,13.101z"
      />
    </svg>
  )
}

const Menu = () => {
  return (
    <nav className="fixed left-0 bottom-0 w-full py-2 bg-gray-100 flex justify-around">
      <Link to="/" className="py-1 px-3 bg-white rounded-full shadow-lg">
        <HomeIcon className="h-8 my-2 text-gray-500" />
      </Link>
      <a className="py-1 px-2 bg-white rounded-full shadow-lg">
        <AddToListIcon className="h-8 my-2 text-gray-500" />
      </a>
      <a className="-mt-5 pt-1 mb-5 px-2 bg-white rounded-full shadow-lg border-4 border-gray-100 grid grid-cols-2 grid-rows-2">
        <ShoppingCartIcon className="col-start-1 row-start-1 col-span-2 row-span-2 h-8 my-1 text-red-700" />
      </a>
      <a className="py-1 px-2 bg-white rounded-full shadow-lg">
        <BellIcon className="h-8 my-2 text-gray-500" />
      </a>
      <a className="bg-white rounded-full shadow-lg">
        <img
          className="h-12 w-10 mt-2 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
      </a>
    </nav>
  )
}

const PostImage = ({ className, src, addedInListNumber }) => {
  return (
    <div className={`${className}`}>
      <img className="rounded-lg w-full object-cover" src={src} />
      <div
        className="grid -mt-8"
        style={{
          gridTemplateColumns: "max-content 1fr max-content",
        }}
      >
        <div className="col-start-1 flex">
          <button className="text-red-700 ml-2 p-3 rounded-full bg-white shadow-lg">
            <HeartIcon className="h-6" />
          </button>
          <button className="text-gray-700 ml-2 p-3 rounded-full bg-white shadow-lg">
            <CommentIcon className="h-6" />
          </button>
        </div>
        <div className="col-start-3 flex justify-end items-center mr-2 pl-3 pr-1 rounded-full bg-white shadow-lg">
          <span className="text-sm text-gray-900 font-extrabold">
            {addedInListNumber}
          </span>
          <button className="p-2 ml-2 rounded-full bg-red-700 shadow-lg">
            <AddToListIcon className="text-white h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

const PostAuthor = ({ src, name }) => {
  return (
    <div className="py-1 flex w-11/12 mx-auto">
      <img className="h-12 w-12 rounded-full object-cover" src={src} />
      <div className="ml-2">
        <h3 className="text-sm font-bold">{name}</h3>
        <h4 className="text-xs text-gray-500">54 minutes ago</h4>
      </div>
    </div>
  )
}

const PostTitle = ({
  title,
  price,
  brand,
  likes,
  wishlistedByNames,
  wishlistedByNumber,
}) => {
  return (
    <div className="mt-4 w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="font-black">{title}</h2>
        <h3 className="">
          <span className="font-semibold">${price}</span>
          <span className="ml-1 mr-1">·</span>
          <span className="text-gray-500">{brand}</span>
        </h3>
      </div>

      <hr className="my-5" />
      <h4>
        {likes ? (
          <span>
            <span className="font-black">{likes}</span>
            <span> likes</span>
            <span className="ml-1 mr-1">·</span>
          </span>
        ) : (
          ""
        )}
        {wishlistedByNames ? (
          <span>
            <span>Wishlisted by </span>
            <span className="font-black">{wishlistedByNames}</span>
            {wishlistedByNumber ? (
              <span>
                <span> and </span>
                <span className="font-black">{wishlistedByNumber}</span>
                <span> other people you follow.</span>
              </span>
            ) : (
              ""
            )}
          </span>
        ) : (
          ""
        )}
      </h4>
    </div>
  )
}

const PostComment = ({ author, children }) => {
  return (
    <p>
      <span className="font-black">{author}</span>
      <span> {children}</span>
    </p>
  )
}

const Post = ({
  imageSrc,
  authorName,
  authorSrc,
  postTitle,
  price,
  brandName,
  likes,
  wishlistedByNames,
  wishlistedByNumber,
  children,
  addedInListNumber,
}) => {
  return (
    <div className="bg-white py-5 px-2">
      <PostAuthor name={authorName} src={authorSrc} />
      <PostImage
        src={imageSrc}
        addedInListNumber={addedInListNumber}
        className="mt-3"
      />
      <PostTitle
        title={postTitle}
        price={price}
        brand={brandName}
        likes={likes}
        wishlistedByNames={wishlistedByNames}
        wishlistedByNumber={wishlistedByNumber}
      />
      <div className="mt-4 w-11/12 mx-auto">{children}</div>
    </div>
  )
}
//

const Story = ({ className, seen, name, src }) => {
  return (
    <div
      className={`my-2 px-1 py-1 bg-white rounded-lg shadow-lg ${className}`}
    >
      <img
        className={`h-16 w-16 mx-auto mt-2 rounded-full object-cover ${
          seen ? "" : "border-2 border-red-800"
        }`}
        src={src}
      />
      <h5 className="text-center text-sm font-semibold">{name}</h5>
    </div>
  )
}

const Stories = () => {
  const params = {
    slidesPerView: 5,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  }
  return (
    <Swiper {...params}>
      <Story
        name="Marta"
        src="https://images.unsplash.com/photo-1578780086824-6e848145e8fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      />
      <Story
        name="Diana"
        src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
        className="ml-1"
      />
      <Story
        name="David"
        src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        className="ml-1"
      />
      <Story
        name="Mei"
        src="https://images.unsplash.com/photo-1531299669378-dd18b44a8dbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        seen={true}
        className="ml-1"
      />
      <Story
        name="Rhi"
        src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=881&q=80"
        seen={true}
        className="ml-1"
      />
      <Story
        name="Rhi"
        src="https://images.unsplash.com/photo-1568927198336-e9ae04365910?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        seen={true}
        className="ml-1"
      />
    </Swiper>
  )
}

const SocialShopping = () => {
  return (
    <div className="font-sans bg-gray-200 text-gray-900 min-h-screen">
      <main className="mb-16 max-w-xl mx-auto">
        <Stories />
        <Post
          authorName="Brittany West"
          authorSrc="https://images.unsplash.com/photo-1521117177129-ca6b2e68cb26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          imageSrc="https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dwd4e573a0/images/hi-res/201/52/176802_NM_1y.jpg?sw=679&q=100"
          postTitle="Watercolor Earrings With Flowers"
          price="19.90"
          brandName="Parfois"
          likes="595,925"
          wishlistedByNames="Danielle Barnes, Sandra Miller"
          wishlistedByNumber="5"
          addedInListNumber="12,1K"
        >
          <PostComment author="Monica Green">Her skin is 😍</PostComment>
          <PostComment author="Zoe Silva">
            <span className="text-blue-500 font-semibold">@Joey</span> 🙏 will
            you buy me a pair of these?
          </PostComment>
        </Post>
        <Post
          authorName="Ora Wright"
          authorSrc="https://images.unsplash.com/photo-1558377235-802c801ab268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          imageSrc="https://static.zara.net/photos///2020/I/0/1/p/5039/173/064/2/w/1416/5039173064_2_10_1.jpg?ts=1591960761034"
          postTitle="Two-tone lace dress"
          price="29.90"
          brandName="Zara"
          likes="694,417"
          wishlistedByNames="Austen Foster, Harriette Styles"
          wishlistedByNumber="12"
          addedInListNumber="90,2K"
        >
          <PostComment author="Tawnee Denman">So elegant!</PostComment>
          <PostComment author="Zoe Silva">
            Dips{" "}
            <span className="text-blue-500 font-semibold">
              @_julymartins @Oaklynn @mbardsley{" "}
            </span>
          </PostComment>
        </Post>
        <Post
          authorName="Verity Good"
          authorSrc="https://images.unsplash.com/photo-1517812989268-e75958710fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          imageSrc="https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw9669cb9c/images/B2C/20SWMK08_2000_1.jpg?sfrm=jpg&sw=760"
          postTitle="Floral mandala print swimsuit"
          price="99.90"
          brandName="Desigual"
          likes="676,650"
          wishlistedByNames="Darcey Hurst, Deonne Gardner"
          wishlistedByNumber="21"
          addedInListNumber="120K"
        >
          <PostComment author="Monica Green">OMG</PostComment>
          <PostComment author="Monica Green">⛱</PostComment>
          <PostComment author="Zoe Silva">
            Can't wait for the{" "}
            <span className="text-blue-500 font-semibold">#summer</span>
          </PostComment>
        </Post>
      </main>

      <Menu className="" />
    </div>
  )
}

export default SocialShopping
