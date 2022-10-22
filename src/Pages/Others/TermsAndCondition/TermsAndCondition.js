import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is our terms and condition</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis voluptates similique, ad ex itaque cumque? Voluptatem, obcaecati! Quasi maxime a consequuntur blanditiis facilis rem, non adipisci impedit voluptates facere, voluptatibus obcaecati? Molestiae perspiciatis reiciendis, voluptates dicta suscipit voluptatem magnam. Error magnam nesciunt eum minima dolorem quibusdam unde nisi facere?</p>
            <p>Go back to registration : <Link to='/register'>Register</Link>  </p>
        </div>
    );
};

export default TermsAndCondition;