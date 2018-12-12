import React from 'react';
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";
import {Route} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import HomeDict from "./HomeDict";
import EditDict from "./EditDict";
import AddDict from "./AddDict";


class Dict extends React.Component {

  render() {
    return (
      <div>
          <Route exact path="/dict/" component={HomeDict}/>
          <Route path="/dict/add/" component={AddDict}/>
          <Route path="/dict/edit/:name" component={EditDict}/>
     </div>
    );
  }
}

export default Dict;
