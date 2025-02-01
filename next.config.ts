import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:['cdn.dummyjson.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.techinasia.com",
        pathname: "/assets/**",
      },
    ],
    
  },

  
};

export default nextConfig;
