export const calculateScrollPosition = (action: Function, color: string) => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      if (scrollPosition > 650) {
        action("#4E54C8");
      } else {
        action(color);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };