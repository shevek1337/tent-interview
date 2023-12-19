/** @type {import('tailwindcss').Config} */
const config = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        searchTemplateGrid: "250px 1fr",
      },
      boxShadow: {
        sidebarFooter: "0px 2px 16px 0px rgba(39, 42, 55, 0.13)",
      },
      borderRadius: {
        large: "0.688rem",
        cardBorderRadius: "0.875rem",
      },
      width: {
        desktopSidebar: "15.625rem",
      },
      container: {
        screens: {
          lg: "1050px",
        },
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        5.75: "1.438rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        19: "4.75rem",
        35: "8.75rem",
        38.5: "9.625rem",
        44.5: "11.125rem",
        62.5: "15.625rem",
      },
      minWidth: {
        image: "11.125rem",
      },
      colors: {
        primary: {
          gray: {
            25: "#F9F9FB",
            50: "#F2F3F6",
          },
          orange: {
            800: "#FD4100",
          },
          white: "#FFFFFF",
          black: {
            800: "#272A37",
          },
        },
        secondary: {
          green: {
            50: "#F0F9F7",
            200: "#59D8C9",
            300: "#26B753",
          },
          black: {
            500: "#8C929B",
            600: "#8C929B",
            "600Alt": "#6F7383",
          },
          gray: {
            100: "#E9E9F0",
            200: "#E2E5EB",
          },
          violet: {
            500: "#4A6CFA",
          },
          yellow: {
            500: "#FEC900",
          },
        },
        border: {
          gray: {
            100: "#E9E9F0",
            200: "#E2E5EB",
            400: "#D8DBE2",
          },
        },
        text: {
          black: {
            "500Alt": "#8C929B",
            600: "#6F7383",
            800: "#272A37",
            900: "#1B1D25",
          },
          white: "#FFFFFF",
          red: {
            800: "#FF3B30",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
