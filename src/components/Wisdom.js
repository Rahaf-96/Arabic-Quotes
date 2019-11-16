import React from 'react';

function Wisdom({ quotesList }) {
    const quoteComponent = quotesList.map((quote, i) => {
        return (
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba shadow-5" key={i}>
                <div className="tc">
                    <img src={quote.image} className="br-100 h3 w3 " alt="md" />
                    <h1 id="author" className="f4">{quote.author}</h1>
                    <hr className="mw3 bb bw1 b--black-10" />
                </div>
                <p className="lh-copy measure center f6 black-70 " style={{ textAlign: "justify", direction: "rtl" }}>
                    {quote.quote}
                </p>
            </article>
        );
    });

    return (
        <div>    
        
            <div className="flex flex-row flex-wrap ">

                {quoteComponent}



            </div>
        </div>
    );
}

export default Wisdom;