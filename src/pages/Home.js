import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div> 
 <main class="election">
      <div class="dashboard-parent">
        <div class="dashboard">
          <div class="dashboard-child"></div>
          <div class="past" id="past">
            <div class="past-child"></div>
            <div class="past1"><a  class ="dash" href="#">Past</a></div>
            <img
              class="monitoring-fill0-wght400-grad0-icon"
              alt=""
              src="./assests/public/Past.png"
            />
          </div>
          <div class="logout" id="logout">
            <div class="rectangle-parent">
              <div class="group-child"></div>
              <div class="logout1"><a  class ="dash" href="#">Logout</a></div>
            </div>
            <img
              class="logout-fill0-wght400-grad0-ops-icon"
              alt=""
              src="./assests/public/Logout.png"
            />
          </div>
          <div class="home" id="home">
            <div class="home-child"></div>
            <div class="faq"><a  class ="dash" href="#">Home</a></div>

            <img class="vector-icon" alt="" src="./assests/public/home.png" />
          </div>
          <div class="ongoing" id="ongoing">
            <div class="home-child"></div>
            <div class=" faqong"><a  class ="dash" href="#">Ongoing</a></div>
            <img
              class="how-to-vote-fill0-wght400-grad-icon"
              alt=""
              src="./assests/public/Ongoing.png"
            />
          </div>
        </div>
    

        <div class="election-page-parent">
          <div class="election-page">
            <div class="election-page">
              <div class="wildbeats-child"></div>
              <div class="wildbeats1">WildBeats</div>
            </div>
          </div>
          <div class="election-page1">
            <div class="sub">
              <div class="sub-child"></div>
              <div class="submit">
                <button id="submit" class="submintbtn"><a href="#">Submit</a></button>
              </div>
            </div>
          </div>
          <div class="rectangle-group">
            <div class="group-item"></div>
            <div class="candidates">
              <div class="cand3">
                <div class="candidates3">
                  <div class="candidates3-child"></div>
                  <div class="candidate-3-name">Candidate 3 Name</div>
                </div>
              </div>
              <div class="cand2">
                <div class="candidates3">
                  <div class="candidates3-child"></div>
                  <div class="candidate-3-name">Candidate 2 Name</div>
                </div>
              </div>
              <div class="candidates3">
                <div class="candidates3">
                  <div class="candidates3-child"></div>
                  <div class="candidate-3-name">Candidate 1 Name</div>
                </div>
              </div>
            </div>
            <div class="vote2">
              <div class="vote2-child"></div>
              <div class="vote">

                <button id="vote2" class="votebtn"><a href="#">vote</a></button>
              </div>
            </div>
            <div class="vote3">
              <div class="vote2-child"></div>
              <div class="vote">
                
                <button id="vote2" class="votebtn"><a href="#">vote</a></button>
              </div>
            </div>
            <div class="vote11">
              <div class="vote2-child"></div>
              <div class="vote">
                <button id="vote2" class="votebtn"><a href="#">vote</a></button>
              </div>
            </div>
            
          </div>
        </div>


        <div class="faqvariant3" id="faqVariant3Container">
          <div class="home-child"></div>
          <div class="faq"><a  class ="dash" href="#">FAQ</a></div>
          <img class="vector-icon1" alt="" src="./assests/public/FAQ.png" />
        </div>
      </div>
    </main>
            </div>
        );
    }
}
export default Home;