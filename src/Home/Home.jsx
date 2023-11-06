import homestyle from'./Home.module.css';


const Home = () => {
  return (
    <>
      <div >
        
      <div className={homestyle.house}>
        <h1>Enjoy The Travel with<br/><span>Holiday Planners</span></h1>
        <p>A Journey of thousand miles start with a single step.Import the full<br/>demo content 
        with 1 click and create a head-turning website for<br/> your travel agency.</p>
      </div>
      <div className={homestyle.homePage}>
        <div className={homestyle.search}>
          <input type="text" name="" id=""  placeholder='Where To?'/>
          <select name="" id="">
            <option value="">when?</option>
            <option value="">January</option>
            <option value="">February</option>
            <option value="">March</option>
            <option value="">May</option>
            <option value="">June</option>
            <option value="">July</option>
            <option value="">August</option>
            <option value="">September</option>
            <option value="">October</option>
            <option value="">November</option>
            <option value="">December</option>
          </select>
          <select name="" id="">
            <option value="">Travel Type</option>
            <option value="">Culture</option>
            <option value="">Adventure</option>
            <option value="">Historical</option>
            <option value="">SeaSide</option>
            <option value="">Discovery</option>
          </select>
          <button>Find now</button>
        </div>
        <div className={homestyle.photoes1}>
            <img src="10003.jpg" alt="" />
        </div>
        <div className={homestyle.photoe2}>
            <img src="10002.jpg" alt="" />
        </div>
        <div className={homestyle.contactUs}>
          <div className={homestyle.para1}>
          <p>About us</p>
          <h1>Plan Your <span>Trip</span> with <span>Us</span></h1>
          </div>
          
          <div className={homestyle.para2}>
            <p>Far away,behind the word montains, far from the countries Vokalia and <br/>
            Consonantia, there live blind texts. Separated they live in<br/>
            Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br/>
            A small river named Duden flows by their place and supplies it with the<br/>
             necessary regelialia. It is a paradisematic country, in which roasted parts of<br/>
              sentences fly into your mouth. Even the all-powerful Pointing has no control<br/>
               about the blind texts it is an almost unorthographic. Italic Mountains, she <b/>
               had a last view back on the skyline
            </p>
          </div>
          <button>Read more</button>
        </div>
      </div>
       </div>
    </>
  )
}
export default Home
