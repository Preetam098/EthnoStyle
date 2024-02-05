import React , { useEffect} from "react";
import styled, { keyframes } from "styled-components"; // Make sure to install styled-components

// Styled components for the confetti animation
const ConfettiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40%;
  height: 10px;

`;

const ConfettiPiece = styled.div`
  position: absolute;
  width: 8px;
  height: 16px;
  background: ${(props) => (props.isOdd ? "#17d3ff" : "#ffd300")};
  top: 0;
  opacity: 0;

  &:nth-child(odd) {
    background: #17d3ff;
  }

  &:nth-child(even) {
    z-index: 1;
  }

  /* Add other styles for confetti pieces */

  /* ... */

  @keyframes makeItRain {
    from {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    to {
      transform: translateY(200px);
    }
  }
`;

const ConfettiAnimation = () => {
  useEffect(() => {
    // Add logic to trigger confetti animation on component mount
    // You can use your own logic or a library like react-spring for more control
  }, []);

  return (
    <ConfettiContainer>
      {[...Array(13)].map((_, index) => (
        <ConfettiPiece
          key={index}
          isOdd={index % 2 === 0}
          style={{
            left: `${(index + 1) * 7}%`,
            transform: `rotate(${randomNum(-80, 80)}deg)`,
            animation: `makeItRain ${randomNum(700, 1200)}ms infinite ease-out`,
            animationDelay: `${randomNum(0, 500)}ms`,
            animationDuration: `${randomNum(700, 1200)}ms`,
          }}
        />
      ))}
    </ConfettiContainer>
  );
};

// Utility function for random number generation
const randomNum = (min, max) => {
    const rand = Math.random();
    return min + Math.floor(rand * (max - min + 1));
  };

export default ConfettiAnimation