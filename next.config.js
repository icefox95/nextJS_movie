const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
      {
        source:"/contact",
        destination:"/about",
        permanent: false,
      }
    ]
  },
  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
  ]
  },
}

module.exports = nextConfig
