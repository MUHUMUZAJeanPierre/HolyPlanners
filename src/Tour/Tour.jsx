import tourStyle from './Tour.module.css'
import { BiSearch } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { MdGroup } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tour = () => {
  const navigate = useNavigate();
  const [tourLists, setTourLists] = useState([]);
  let token = localStorage.getItem("token");
  const fetchTourList = () => {
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((Response) => {
        setTourLists(Response.data);
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTourList();
  }, []);

  return (
    <div>
      <div className={tourStyle.tourCt}>
        <div className={tourStyle.tourHead}>
          <h1>Tour List</h1>
        </div>
        <div className="tourBtm">
          <div className={tourStyle.tourLeft}>
            <div className={tourStyle.sortForm}>
              <p>Sort By :</p>
              <select name="" id="">
                <option value="">DURATION</option>
                <option value="">TOUR DATE</option>
                <option value="">TITLE</option>
              </select>
              <select name="" id="">
                <option value="">ASCENDING</option>
                <option value="">DESCENDING</option>
              </select>
            </div>

            {/* ==================================================== */}

            <div className={tourStyle.tourCards}>
              {tourLists.map((tour) => {
                return (
                  <div className={tourStyle.tourCard}>
                    <img src={tour.backdropImage} alt="" />
                    <div className={tourStyle.cardDescription}>
                      <div className={tourStyle.country}>{tour.destination}</div>
                      <div className={tourStyle.descri}>
                        <p>{tour.Title}</p>
                        <p className={tourStyle.descr}>{tour.Description}</p>
                      </div>
                      <div className={tourStyle.timeSize}>
                        <span className={tourStyle.duration}>
                          <h3>
                            <BiTimeFive className={tourStyle.cardcons} />
                            Duration
                          </h3>
                          <p className={tourStyle.smallp}>{tour.Duration} </p>
                        </span>
                        <span className={tourStyle.groupSize}>
                          <h3>
                            <MdGroup className={tourStyle.cardcons} />
                            Group Size
                          </h3>
                          <p className={tourStyle.smallp}>{tour.GroupSize} </p>
                        </span>
                      </div>
                      <div className={tourStyle.footcards}>
                        <p className={tourStyle.price}>{tour.Price} $ </p>
                        <button
                          className={tourStyle.butCard}
                          onClick={() => navigate(`/tourdetail/${tour._id}`)}
                        >
                          book now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ==================================================== */}
          </div>
          <div className={tourStyle.tourRight}>
            <form action="" className={tourStyle.rightForm}>
              <label htmlFor="" className={tourStyle.finddd}>
                FIND YOUR TOUR
              </label>
              <BiSearch className={tourStyle.srchff} />
              <input type="text" placeholder="Search tour" />
              <MdLocationOn className={tourStyle.lctff}/>
              <input type="text" placeholder="Where to ?" />
              <FaCalendarAlt className={tourStyle.cldff} />
              <select name="" id="">
                <option value="">Month</option>
              </select>
              <label htmlFor="" className={tourStyle.dra}>
                Duration
              </label>
              <select name="" id="">
                <option value="">Any</option>
              </select>
              <div className={tourStyle.checkboxItem}>
                <input type="checkbox" />
                <label>Cultural</label>
              </div>
              <div className={tourStyle.checkboxItem}>
                <input type="checkbox" />
                <label>Adventure</label>
              </div>
              <div className={tourStyle.checkboxItem}>
                <input type="checkbox" />
                <label>Historical</label>
              </div>
              <div className={tourStyle.checkboxItem}>
                <input type="checkbox" />
                <label>Seaside</label>
              </div>
              <div className={tourStyle.checkboxItem}>
                <input type="checkbox" />
                <label>Discovery</label>
              </div>
              <button type="submit" className={tourStyle.fnow}>
                FIND NOW
              </button>
            </form>

            <div className={tourStyle.questToppu}>
              <div className={tourStyle.questTopTitlee}>
                <h1>WHY BOOK WITH US?</h1>
              </div>
              <div className={tourStyle.lssst}>
                <ul>
                  <li>
                    <MdOutlineKeyboardArrowRight className={tourStyle.arrrw}/> Best Price
                    Guarantee
                  </li>
                  <li>
                    <MdOutlineKeyboardArrowRight className={tourStyle.arrrw}/> Customer
                    care Available 24/7
                  </li>
                  <li>
                    <MdOutlineKeyboardArrowRight className={tourStyle.arrrw}/> Free
                    travel insurance
                  </li>
                  <li>
                    <MdOutlineKeyboardArrowRight className={tourStyle.arrrw}/>
                    Hand-picked tours & Activities
                  </li>
                </ul>
              </div>
            </div>

            <div className={tourStyle.questBtm}>
              <div className={tourStyle.questtt}>
                <div className={tourStyle.questtTopTite}>
                  <h1>GOT A QUESTION ?</h1>
                  <p>
                    Do not hesitate to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                  <span className={tourStyle.sppd}>
                    <MdEmail className={tourStyle.qsste} />
                    holidayplanners@gmail.com
                  </span>
                  <span className={tourStyle.sppd}>
                    <BsFillTelephoneFill className={tourStyle.qsste} /> +0784998214
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;