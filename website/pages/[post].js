import dynamic from "next/dynamic";
import Link from "next/link";

const SocialArea = dynamic(() => import("../components/socialArea"));

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { post: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const currentUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.post}`;
  const res = await fetch(currentUrl);
  const post = await res.json();

  const linkedinShare =
    "http://www.linkedin.com/shareArticle?mini=true&url=" +
    currentUrl +
    "&title=" +
    `${post.title}`;
  const facebookShare = "http://www.facebook.com/sharer.php?u=" + currentUrl;
  const twitterShare =
    "https://twitter.com/share?url=" +
    currentUrl +
    "&text=" +
    `${post.title}` +
    "&hashtags=humanresources,insankaynaklari";
  const envelopShare =
    "mailto:?Subject=" + `${post.title}` + "&body=" + currentUrl;

  return {
    props: { post, linkedinShare, facebookShare, twitterShare, envelopShare },
  };
}

function PostPage({
  post,
  linkedinShare,
  facebookShare,
  twitterShare,
  envelopShare,
}) {
  return (
    <div className="detailPage">
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <section className="postArea">
        <div className="container">
          <div className="imageArea">
            <img
              className="img"
              src={`${process.env.NEXT_PUBLIC_API_URL}` + post.banner.url}
            ></img>
          </div>
          <SocialArea
            linkedinShare={linkedinShare}
            facebookShare={facebookShare}
            twitterShare={twitterShare}
            envelopShare={envelopShare}
          />
          <h1 className="title">{post.title}</h1>
          <div
            className="descArea"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <SocialArea
            linkedinShare={linkedinShare}
            facebookShare={facebookShare}
            twitterShare={twitterShare}
            envelopShare={envelopShare}
          />
          <div className="returnHome">
            <Link href="/">
              <a className="link">
                <span className="leftArrow">&#8592; </span>
                Anasayfaya Dön
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostPage;