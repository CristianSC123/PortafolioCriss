export const handleScroll = (setActiveSection: (section: string) => void) => {
    const sections = ["home", "skills", "projects", "contact"];
    const scrollPosition = window.scrollY + 100;
  
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };
  
  export const scrollToSection = (sectionId: string, setActiveSection: (section: string) => void) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };