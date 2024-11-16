import React from 'react';
import GoogleLogo from '../images/google.png';
import SlackLogo from '../images/slack.png';
import AtlassianLogo from '../images/atlassian.png';
import DropboxLogo from '../images/dropbox.png';
import ShopifyLogo from '../images/shopify.png';

const Logo = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 md:space-x-10 mt-8 mb-8">
      <img src={GoogleLogo} alt="Google Logo" className="h-6 md:h-8 opacity-70 my-2" />
      <img src={SlackLogo} alt="Slack Logo" className="h-6 md:h-8 opacity-70 my-2" />
      <img src={AtlassianLogo} alt="Atlassian Logo" className="h-6 md:h-8 opacity-70 my-2" />
      <img src={DropboxLogo} alt="Dropbox Logo" className="h-6 md:h-8 opacity-70 my-2" />
      <img src={ShopifyLogo} alt="Shopify Logo" className="h-6 md:h-8 opacity-70 my-2" />
    </div>
  );
};

export default Logo;
