import React from "react";

import "./CreditCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCcAmex,
  faCcMastercard,
  faCcVisa,
  faCcPaypal,
  faCcJcb,
  faCcAmazonPay,
  faCcApplePay,
} from "@fortawesome/free-brands-svg-icons";

import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

export interface ICreditCard {
  EndingCardNumber: string;
  ExpirationDate: string;
  color: string;
  CardType?: string;
  FinancingEntity?: string;
  CardHolder?: string;
}

const getCreditCardLogo = (cardType: string): IconDefinition => {
  switch (cardType) {
    case "AMEX":
      return faCcAmex;
    case "VISA":
      return faCcVisa;
    case "MASTERCARD":
      return faCcMastercard;
    case "PAYPAL":
      return faCcPaypal;
    case "JCB":
      return faCcJcb;
    case "AMAZON":
      return faCcAmazonPay;
    case "Apple":
      return faCcApplePay;
    default:
      return faCreditCard;
  }
};

const getCreditCardName = (cardType: string): any => {
  switch (cardType) {
    case "AMEX":
      return (
        <h5 className="cch5">
          American
          <br />
          Express
        </h5>
      );
    case "VISA":
      return (
        <h5 className="cch5">
          VISA
          <br />
          <br />
        </h5>
      );
    case "MASTERCARD":
      return (
        <h5 className="cch5">
          MasterCard
          <br />
          <br />
        </h5>
      );
    case "PAYPAL":
      return (
        <h5 className="cch5">
          PayPal
          <br />
          <br />
        </h5>
      );
    case "JCB":
      return (
        <h5 className="cch5">
          JCB
          <br />
          <br />
        </h5>
      );
    case "AMAZON":
      return (
        <h5 className="cch5">
          Amazon
          <br />
          Pay
        </h5>
      );
    case "Apple":
      return (
        <h5 className="cch5">
          Apple
          <br />
          Pay
        </h5>
      );
    default:
      return (
        <h5 className="cch5">
          Other
          <br />
          Card
        </h5>
      );
  }
};

const getCreditCardMask = (cardType: string, endingCard: string): string => {
  if (cardType === "AMEX") {
    return `XXXX XXXXXX ${endingCard}`;
  }
  return `XXXX XXXX XXXX ${endingCard}`;
};

const CreditCard: React.FC<ICreditCard> = ({
  EndingCardNumber,
  ExpirationDate,
  color,
  CardType = "",
  FinancingEntity = "",
  CardHolder = "",
}) => {
  return (
    <div className="creditcard">
      <div className={`front ${color}`}>
        <svg
          className="cc-svg"
          viewBox="0 0 350 350"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
        </svg>
        <div className="cc-header">
          <span className="logo">
            <FontAwesomeIcon
              className="brand"
              icon={getCreditCardLogo(CardType)}
              size="5x"
            />
            <h6>{FinancingEntity}</h6>
          </span>
          {getCreditCardName(CardType)}
        </div>
        <div className="cc-details">
          <div className="name-number">
            <h5 className="number">
              {getCreditCardMask(CardType, EndingCardNumber)}
            </h5>
            <h5 className="name">{CardHolder.toUpperCase()}</h5>
          </div>
          <div className="valid-date">
            <h6>Valid Thru</h6>
            <h5>{ExpirationDate}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
