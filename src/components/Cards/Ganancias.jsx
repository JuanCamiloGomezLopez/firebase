import styled from "styled-components";
import { themeColor, hoverEffect, cardShadow } from "../../utils/utils";
import { IoStatsChart } from "react-icons/io5";
export function Ganancias() {

    return (
      <EarningsCard>
        <CardContent>
          <Chart>
            <IoStatsChart />
          </Chart>
          <EarningsText>Ganancias</EarningsText>
          <Earning>$3,000.00</Earning>
          <EarningsIncrease>+ 10% desde el mes pasado</EarningsIncrease>
        </CardContent>
      </EarningsCard>
    );
  }
  
  const EarningsCard = styled.div`  
    height: 250px;
    width: 14rem;
    background-color: ${themeColor};
    border-radius: 1rem;
    color: white;
    transition: 0.4s ease-in-out;
    margin: 1rem;
    box-shadow: ${cardShadow};

    &:hover {
      box-shadow: ${hoverEffect};
    }
  
    @media screen and (min-width: 320px) and (max-width: 780px) {
      width: 90%;
      margin: 5px auto;      
    }
  `;
  const CardContent = styled.div`
    margin: 1rem;
   
  `;
  
  const Chart = styled.div`
    display: flex;
    justify-content: center;
    svg {
      height: 4rem;
      width: 4rem;
    }
  `;
  
  const EarningsText = styled.h3`
    text-align: center;
    font-weight: normal;
    padding: 0.4rem 0;
  `;
  const Earning = styled.h2`
    text-align: center;
  `;
  const EarningsIncrease = styled.h5`
    text-align: center;
    font-weight: normal;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 2rem;
  `;