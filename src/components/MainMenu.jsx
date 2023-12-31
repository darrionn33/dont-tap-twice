import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import { useEffect } from "react";
const MainMenu = (props) => {
  useEffect(() => {
    const logo = document.querySelector("#main_menu_logo");
    const startButton = document.querySelector("#start_button");
    logo.style.top = `calc(50% - ${
      logo.getBoundingClientRect().width / 2 +
      startButton.getBoundingClientRect().height +
      10
    }px)`;
  }, []);

  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1], transition: { duration: 1 } }}
        className="main_menu"
        exit={{ opacity: 0 }}
      >
        <motion.img
          id="main_menu_logo"
          src={logo}
          animate={{ y: -100 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
        <motion.button
          id="start_button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          onClick={() => {
            props.setIsGame(true);
          }}
        >
          Start Game
        </motion.button>
      </motion.div>
    </>
  );
};

export default MainMenu;
