import { useEffect } from "react";
import hljs from "highlight.js";

const useHighlight = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
};

export default useHighlight;
