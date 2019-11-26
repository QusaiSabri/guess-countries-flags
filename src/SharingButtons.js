import React, { Component } from 'react';
import './SharingButtons.css';

class SharingButtons extends Component {
  render() {
    return (
      // <!-- I got these buttons from simplesharebuttons.com -->

      <div id="share-buttons">
        <p id="share-text">Share:</p>
        {/* <!-- Buffer -->
    <a href="https://bufferapp.com/add?url=https://simplesharebuttons.com&amp;text=Simple Share Buttons" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/buffer.png" alt="Buffer" />
    </a>
    
    <!-- Digg -->
    <a href="http://www.digg.com/submit?url=https://simplesharebuttons.com" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/diggit.png" alt="Digg" />
    </a>
    
    <!-- Email -->
    <a href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://simplesharebuttons.com">
        <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
    </a> */}

        {/* <!-- Facebook --> */}
        <a
          href="https://www.facebook.com/sharer.php?u=https://qusaisabri.github.io/guess-countries-flags/"
          target="_blank"
        >
          <img
            src="https://simplesharebuttons.com/images/somacro/facebook.png"
            alt="Facebook"
          />
        </a>

        {/* <!-- Google+ --> */}
        <a
          href="https://plus.google.com/share?url=https://qusaisabri.github.io/guess-countries-flags/"
          target="_blank"
        >
          <img
            src="https://simplesharebuttons.com/images/somacro/google.png"
            alt="Google"
          />
        </a>

        {/* <!-- LinkedIn --> */}
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://qusaisabri.github.io/guess-countries-flags/"
          target="_blank"
        >
          <img
            src="https://simplesharebuttons.com/images/somacro/linkedin.png"
            alt="LinkedIn"
          />
        </a>

        {/* <!-- Reddit --> */}
        <a
          href="https://reddit.com/submit?url=https://qusaisabri.github.io/guess-countries-flags/&amp;title=How Many Flags Do You Know?"
          target="_blank"
        >
          <img
            src="https://simplesharebuttons.com/images/somacro/reddit.png"
            alt="Reddit"
          />
        </a>

        {/* <!-- Tumblr--> */}
        <a
          href="https://www.tumblr.com/share/link?url=https://qusaisabri.github.io/guess-countries-flags/&amp;title=How Many Flags Do You Know?"
          target="_blank"
        >
          <img
            src="https://simplesharebuttons.com/images/somacro/tumblr.png"
            alt="Tumblr"
          />
        </a>

        {/* <!-- Twitter --> */}
        <a
          href="https://twitter.com/share?url=https://qusaisabri.github.io/guess-countries-flags/&amp;text=How%20Many%20Flags%20Do%20You%20Know?&amp;hashtags=GuessTheFlag"
          target="_blank"
        >
          <img
            src="https://simplesharebuttons.com/images/somacro/twitter.png"
            alt="Twitter"
          />
        </a>

        {/* <!-- VK -->
    <a href="http://vkontakte.ru/share.php?url=https://simplesharebuttons.com" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/vk.png" alt="VK" />
    </a>
    
    <!-- Yummly -->
    <a href="http://www.yummly.com/urb/verify?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/yummly.png" alt="Yummly" />
    </a> */}
      </div>
    );
  }
}

export default SharingButtons;
