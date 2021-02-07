import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = await res.json();

  const banners = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`);
  const bannersData = await banners.json();

  return { 
    props: { data, bannersData }, 
    revalidate: 60 
  };
}

function HomePage({ data, bannersData }) {
  return (
    <div className="listPage">
      <section className="bannerArea">
        {bannersData.map((item) => (
          <img
            key={item.banner.hash}
            className="img"
            src={item.banner.url}
          ></img>
        ))}
      </section>

      <section className="postArea">
        <div className="container">
          {data.map((item) => (
            <Link
              key={item.id.toString()}
              href={`/${item.id.toString()}`}
            >
              <a className="descArea">
                <div className="imageArea">
                  <img
                    className="img"
                    src={item.banner.url}
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
