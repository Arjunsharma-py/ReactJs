import Chat from "../Chat";

const Body = () => {
  return (
    <>
      <div className="section">
        <div className="section-container">
          <div className="intro-heading">
            <div className="intro-heading-style">Explore</div>
            <h1>the website</h1>
          </div>
          <div className="intro-para">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              veniam perspiciatis impedit molestias molestiae exercitationem
              commodi adipisci, ipsam optio aperiam, velit sint sapiente sunt
              ipsa voluptas iusto quam, officiis illo.
            </p>
          </div>
        </div>
        <div className="heading-chatbot">
          <h1>Chatbot</h1>
        </div>
        <Chat />
      </div>
    </>
  );
};

export default Body;
