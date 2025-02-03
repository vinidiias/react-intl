import { useState } from "react";
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural, useIntl } from "react-intl";

const Footer = () => {
  const [count, setCount] = useState(0);
  const onChange = () => {
    setCount((prevState) => prevState + 1);
  };

  const intl = useIntl()
  console.log(intl)

  return (
    <div className="container mt">
      {/* Footer content here */}
      <FormattedDate 
        value={Date.now()}
        year="numeric"
        month="long"
        day="2-digit" />
      <br/>
      <FormattedNumber value={2000} style={`currency`} currency="USD" />
      <br />
      <FormattedPlural value={5} one='1 click' other='8 clicks' />
      <br />
      <p><FormattedMessage id="click_count" values={{count: count}} /></p>
      <button onClick={onChange}>
        <FormattedMessage id="click_here" />
      </button>
      <input 
        placeholder={intl.formatDate(Date.now(), {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        })}
         
      />
    </div>
  );
};

export default Footer;

