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
        'footerimg':"url('https://cdn.pixabay.com/photo/2014/08/06/09/58/seo-411385_960_720.jpg') ",
        'background-about':"url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?t=st=1738313992~exp=1738317592~hmac=641f75202dfdfe3d8b4708b763bf0773139b8d05fb4da5169613aa17149694df&w=996')"
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
      moveRight: {
        '0%, 100%': { transform: 'translateX(0)' },  
          '50%': { transform: 'translateX(10px)' }, 
      },
      textanim: {
        '0%': { backgroundPosition: '200% 0' },
        '100%': { backgroundPosition: '0% 0' },
      },
      movemenu:{
        '0%': { transform: 'translateY(10)' },  
          '100%': { transform: 'translateY(40px)' }, 
      }
    },
    animation: {
      gradient: 'gradient 3s ease infinite',
      moveRight: 'moveRight 1s ease-in-out infinite',
      movemenu: 'movemenu 0.5s ease-in-out forwards',
       textanim: 'textanim 5s linear infinite'
    },

  },
  plugins: [],
} satisfies Config;



