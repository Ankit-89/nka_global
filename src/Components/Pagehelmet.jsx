import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    const { pageTitle } = this.props;
    return (
      <>
        <Helmet>
          <title>{pageTitle ? `${pageTitle} | NKA Global Exports – Event Conference React Template` : "NKA Global Exports – Event Conference React Template"}</title>
          <meta
            name="description"
            content="NKA Global Exports – Event Conference React Template is a multi-use React template."
          />
          {/* You can add other dynamic meta tags here as needed */}
        </Helmet>
      </>
    );
  }
}

export default PageHelmet;
