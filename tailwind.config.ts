import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'mainpage' :"url('https://digitalscholar.in/wp-content/uploads/2022/09/seo-tips-for-fashion-e-commerce-website.jpg')",
        'response' : "url('https://media.istockphoto.com/id/1569285773/photo/hand-of-young-woman-using-smartphone-for-chat-and-communication.jpg?s=612x612&w=0&k=20&c=oewcTTtdwOGsGCsNqLkaQ6xV5SuCbN0ggXXb6Giryak=')",
        'footerimg':"url('https://thumbs.dreamstime.com/b/photo-young-man-beige-t-shirt-using-laptop-pointing-finger-mockup-online-shopping-offers-isolated-dark-blue-color-photo-333192924.jpg') "
      },
      borderRadius:{
        '4xl' : "100px"
      }
    },
   

    keyframes: {
      gradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
    animation: {
      gradient: 'gradient 3s ease infinite',
    },

  },
  plugins: [],
} satisfies Config;
