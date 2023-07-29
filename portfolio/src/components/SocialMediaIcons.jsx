const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        classname="hover:opacity-50 transition duration-500"
        href="https://linkedin.com/in/david-solano787"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png"></img>
      </a>
      <a
        classname="hover:opacity-50 transition duration-500"
        href="https://github.com/DavidJSolano"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png"></img>
      </a>
      <a
        classname="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/david.solano.31149/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png"></img>
      </a>
      <a
        classname="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/davidjsolano/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png"></img>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
