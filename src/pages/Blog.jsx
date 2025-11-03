import { Link } from "react-router-dom";
import blogImg from "../assets/blog/blog-1.jpg";
import blogImg2 from "../assets/blog/blog-1.jpg";
import blogImg3 from "../assets/blog/blog-1.jpg";
import admin from "../assets/blog/admin.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogPosts = [
  {
    id: 1,
    category: "Web Design",
    image: blogImg,
    authorImage: admin,
    authorName: "Daniel Martin",
    date: "24 March 2023",
    excerpt:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet",
    readMoreLink: "/blog/1",
  },
  {
    id: 2,
    category: "UI/UX",
    image: blogImg2,
    authorImage: admin,
    authorName: "Sarah Williams",
    date: "10 April 2023",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    readMoreLink: "/blog/2",
  },
  {
    id: 3,
    category: "Development",
    image: blogImg3,
    authorImage: admin,
    authorName: "Michael Smith",
    date: "5 May 2023",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    readMoreLink: "/blog/3",
  },
];

const Blog = () => {
  const generateShareLinks = (postUrl) => ({
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}`,
    instagram: `#`, // Instagram doesn't support direct URL sharing
  });

  return (
    <section className="container mx-auto py-20 mb-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h5 className="text-blue-600 font-semibold mb-2">Our Blog</h5>
        <h1 className="text-4xl font-bold">Latest Blog & News</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="swiper-container"
      >
        {blogPosts.map((post) => {
          const { id, category, image, authorImage, authorName, date, excerpt, readMoreLink } = post;
          const shareLinks = generateShareLinks(`https://yourdomain.com${readMoreLink}`);

          return (
            <SwiperSlide key={id}>
              <article className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition duration-300 flex flex-col h-[450px]">
                <img
                  src={image}
                  alt={`Blog post cover image for ${category}`}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                <span className="absolute top-[-28px] right-5 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold">
                  {category}
                </span>

                {/* Blog Buttons */}
                <div className="flex justify-between px-4 mt-[-75px] relative">
                  <Link
                    to={"/about"}
                    className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                  >
                    Read More
                  </Link>
                  <div className="flex items-center bg-blue-100 rounded-full px-4 py-2 space-x-2">

                    <div className="flex space-x-2">
                      <a
                        href={shareLinks.facebook}
                        aria-label="Share on Facebook"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href={shareLinks.twitter}
                        aria-label="Share on Twitter"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={shareLinks.instagram}
                        aria-label="Share on Instagram"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="flex flex-col flex-grow text-center px-4 mt-[-25px] relative">
                  <img
                    src={authorImage}
                    alt={`Profile picture of ${authorName}`}
                    className="mx-auto rounded-full border-4 border-white mb-3 w-20 h-20 object-cover"
                  />
                  <h5 className="text-gray-800 font-semibold">{`By ${authorName}`}</h5>
                  <span className="text-gray-500 text-sm">{date}</span>
                  <p className="py-4 text-gray-700 text-sm line-clamp-3">{excerpt}</p>
                </div>

                {/* Blog Comments */}
                <div className="flex justify-between px-6 py-4 bg-blue-600 rounded-b-lg text-white text-sm">

                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blog;