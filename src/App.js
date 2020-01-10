import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { DiscoverIslam } from './components/DiscoverIslam';
import { Donate } from './components/Donate';
import { PrayerTimes } from './components/PrayerTimes';
import { Visitors } from './components/Visitors';
import  LocateUs  from './components/LocateUs'
import { PictureSlide } from './components/PictureSlide'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Layout>
          <Navigation />
          <PictureSlide />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/discoverislam" component={DiscoverIslam}/>
              <Route path="/donate" component={Donate}/>
              <Route path="/prayertimes" component={PrayerTimes}/>
              <Route path="/visitors" component={Visitors}/>
              <Route path="/locateus" component={LocateUs}/>
              <Route component={NoMatch} />
            </Switch>
          </Layout>

        </Router>
      </React.Fragment>
    );
  }
}

export default App;
