import './App.css';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>Media Appearances</h1>
        <Button className="button" variant="contained"><MenuIcon className="hamburger"></MenuIcon></Button>
      </div>
      <div className="content">
        <div className="container">
          <div className="box">
              <h2 className="title">Science <span className="span">Magazine</span> <span className="span">11. 12. 2018</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sagittis elit, consequat convallis lorem. Sed viverra ac elit nec vehicula. Proin interdum, lacus suscipit gravida condimentum, leo turpis suscipit justo, nec imperdiet turpis dolor sed felis. Cras ac nisi in nunc mattis feugiat posuere semper ex. Pellentesque sagittis tristique ex non posuere. Morbi libero erat, feugiat quis tempor et, ullamcorper nec libero. Fusce nec ligula vestibulum, fermentum tortor vel, vulputate urna. Pellentesque dignissim eros orci, non vehicula libero euismod eu. Fusce ut cursus purus, vel vehicula tortor.</p>
          </div>
          <Button className="button">Read More</Button>
        </div>
        <div className="container">
        <div className="box">
            <h2 className="title">Nature <span className="span">27. 11. 2018</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sagittis elit, consequat convallis lorem. Sed viverra ac elit nec vehicula. Proin interdum, lacus suscipit gravida condimentum, leo turpis suscipit justo, nec imperdiet turpis dolor sed felis. Cras ac nisi in nunc mattis feugiat posuere semper ex. Pellentesque sagittis tristique ex non posuere. Morbi libero erat, feugiat quis tempor et, ullamcorper nec libero. Fusce nec ligula vestibulum, fermentum tortor vel, vulputate urna. Pellentesque dignissim eros orci, non vehicula libero euismod eu. Fusce ut cursus purus, vel vehicula tortor.</p>
        </div>
            <Button className="button">Read More</Button>
        </div>
        <div className="container">
        <div className="box">
            <PlayCircleOutlineIcon className="playicon"></PlayCircleOutlineIcon>
            <h2 className="bottomh2">Lecture at NYU</h2>
        </div>
            <Button className="button">Read More</Button>

        </div>
      </div>
    </div>
  );
}

export default App;
