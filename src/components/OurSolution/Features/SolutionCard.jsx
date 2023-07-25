import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(238, 238, 238);
  border-radius: 16px;
  background: rgba(251, 251, 251, 0.5);
  padding: 36px;
  height: fit-content;
  width: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s ease;
  gap: 1rem;
  flex-shrink: 0;

  &:hover {
    transition: 0.5s ease;
    background: rgba(236, 255, 239, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.9px);
    -webkit-backdrop-filter: blur(14.9px);
    border: 1px solid rgba(219, 255, 224, 0.5);
  }
`;
const Card = ({card}) => {
    const [showMore, setShowMore] = useState(false);

    const toggleContent = () => {
      setShowMore(!showMore);
    };

  return (
    <>
      <StyledCard>
        <div className="my-4">
          <span>{card.icon}</span>
        </div>
        <Link
          to="/"
          className="font-bold text-2xl md:text-3xl leading-[3rem] hover:text-green-500"
        >
          {card.title}
        </Link>
        <div>
          <p
            className={`leading-7 ${
              showMore
                ? ""
                : "line-clamp-3"
            }`}
          >
            {card.description}
          </p>
          <span>
            <button
              onClick={toggleContent}
              className="text-green-500 border-none"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </span>
        </div>
        <ul className="list-disc px-4 marker:text-green-500">
          {card.list.map((item) => {
            return <li key={item.id} className="font-semibold">{item.text}</li>;
          })}
        </ul>
      </StyledCard>
    </>
  );
}

export default Card
