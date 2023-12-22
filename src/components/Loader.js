import React, { useRef, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { motion, AnimatePresence } from "framer-motion";

import { Audio } from "react-loader-spinner";
import LoadingBar from "react-top-loading-bar";

import "../styles/Loader.scss";

const Loader = () => {
  const ref = useRef(null);

  const { loadingContent, setLoadingContent } = useContext(Context);

  useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
      setLoadingContent(false);
    }, 1700);
  }, []);

  const barsVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
      },
    },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="loader">
      <div>
        <LoadingBar color="var(--gray-color1)" ref={ref} loaderSpeed="100" />
      </div>

      <AnimatePresence>
        {loadingContent && (
          <motion.div
            variants={barsVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Audio
              height="100"
              width="100"
              color="var(--gray-color1)"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Loader;
