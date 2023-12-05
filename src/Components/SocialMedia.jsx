import React from 'react';
import { SocialMediaContainer, StyledLinkedIn, StyledGitHub, StyledEmail } from '../style/socialmediaStyle';

function SocialMedia() {
  return (
    <SocialMediaContainer>
      <a
        href="http://www.linkedin.com/in/leonardo-santana-2460a8202"
        alt="contato via Linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledLinkedIn />
      </a>

      <a
        href="http://github.com/Lsantana95"
        alt="conta do Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledGitHub />
      </a>

      <a
        href="http://mail.google.com/mail/u/0/#inbox"
        alt="contato via email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledEmail />
      </a>
    </SocialMediaContainer>
  );
}

export default SocialMedia;
