const Footer = () => {
  return (
    <footer
      className="text-sm md:text-base"
      style={{
        position: "fixed",
        bottom: 0,
        zIndex: 10,
        padding: "12px",
        backgroundColor: "rgb(229 231 235)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div className="mr-4">
        <a href="mailto:slavalu74@gmail.com" className="hover:underline">
          E-mail
        </a>
      </div>
      <div className="mr-4 hidden md:block">
        <a
          href="https://github.com/your-github"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <div>&copy; {new Date().getFullYear()} All rights reserved</div>
    </footer>
  );
};

export default Footer;
