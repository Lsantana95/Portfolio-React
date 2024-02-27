import styled from 'styled-components';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const SocialMediaContainer = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 18px;

  a {
    color: #3CB371;
    font-size: 45px;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #1E90FF;
  }

  a:nth-child(2):hover {
    color: #FF6347;
  }

  a:nth-child(3):hover {
    color: #1C1C1C;
  }
`;

export const StyledLinkedIn = styled(FaLinkedin)``; 

export const StyledEmail = styled(MdEmail)``;

export const StyledGitHub = styled(FaGithub)``; 
