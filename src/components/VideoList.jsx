//import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';
import App from './components/App.js';
var VideoList = (props) => (
  <div class = 'video-list'>
    <div><h5><em>{props.exampleVideoData[0]}</em>View List </h5></div>
    <div><h5><em>{props.exampleVideoData[1]}</em> View List </h5></div>
    <div><h5><em>{props.exampleVideoData[2]}</em> View List </h5></div>
    <div><h5><em>{props.exampleVideoData[3]}</em> View List </h5></div>
    <div><h5><em>{props.exampleVideoData[4]}</em> View List </h5></div>
  </div>
);

var App = () =>(
  <div>
    <VideoList exampleVideoData={[exampleVideoData[0]]}/>
  </div>
);

ReactDOM.render(<VideoList />, document.getElementsByClassName('col-md-5'));
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

console.log(VideoList.propTypes)

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//import VideoList from './components/VideoList.js';
