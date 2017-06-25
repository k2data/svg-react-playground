// @flow
// We only need to import the modules necessary for initial render
import Home from './Home'
import Counter from './Counter'
import Wheels from './Wheels'
import Pages from './Pages'
import SVGLine from './SVGLine'

// Force import during development to enable Hot-Module Replacement
// not need ?
// if (__DEV__) {
//   require('./Home/components/HomeView');
//   require('./GithubRepos/container/GithubRepos');
//   require('./Counter');
// }

export default {
  home: Home,
  counter: Counter(),
  wheels: Wheels(),
  pages: Pages(),
  svgLine: SVGLine()
}
