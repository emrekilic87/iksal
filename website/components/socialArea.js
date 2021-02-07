function SocialArea({
  linkedinShare,
  facebookShare,
  twitterShare,
  envelopShare,
}) {
  return (
    <div className="socialArea">
      <a
        className="social face icon-linkedin"
        href={`${linkedinShare}`}
        target="_blank"
      ></a>
      <a
        className="social face icon-facebook"
        href={`${facebookShare}`}
        target="_blank"
      ></a>
      <a
        className="social face icon-twitter"
        href={`${twitterShare}`}
        target="_blank"
      ></a>
      <a className="social face icon-envelop" href={`${envelopShare}`}></a>
    </div>
  );
}

export default SocialArea;
