import React  from 'react';
import $      from 'jquery';
import {parseString} from 'xml2js';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: 'https://queryfeed.net/twitter?q=javascript',
      URI: '/api/twitter',
      query: 'javascript'
    }
  }

  componentDidMount() {
    $.get(`${this.state.URI}?q=${this.state.query}`)
      .then(xml =>{
        xml = new XMLSerializer().serializeToString(xml.documentElement);
        // xml = xml.toString();
        parseString(xml, {trim: true, explicitArray : false, ignoreAttrs : true}, (err, result) => {
          console.log('result', result);
        });
        /*json.domains.forEach((v,k)=>{
          v.domainId = k+1;
          v.email = '';
        })*/
        // this.setState({domains: json.domains})
      })
      .catch(error =>this.setState({ error }))
  }

  render() {
    return (
      <div>
        <h1>Card...</h1>
      </div>
    )
  }
}