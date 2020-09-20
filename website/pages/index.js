import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = await res.json();

  const banners = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`);
  const bannersData = await banners.json();

  return { props: { data, bannersData } };
}

function HomePage({ data, bannersData }) {
  return (
    <div className="listPage">
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <section className="bannerArea">
        {bannersData.map((item) => (
          <img
            key={item.banner.hash}
            className="img"
            src={`${process.env.NEXT_PUBLIC_API_URL}` + item.banner.url}
          ></img>
        ))}
      </section>

      <section className="postArea">
        <div className="container">
          {data.map((item) => (
            <Link
              key={item.id.toString()}
              href="/[id]"
              as={`/${item.id.toString()}`}
            >
              <a className="descArea">
                <div className="imageArea">
                  <img
                    className="img"
                    src={`${process.env.NEXT_PUBLIC_API_URL}` + item.banner.url}
                  ></img>
                </div>
                <div className="textArea">
                  <h2 className="title">{item.title}</h2>
                  <p className="text">{item.content.substring(0, 500)} ...</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

     

    </div>
  );
}

export default HomePage;
