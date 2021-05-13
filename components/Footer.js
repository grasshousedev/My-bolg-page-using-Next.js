import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer class="site-footer">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div id="contact-buttons" className="flex justify-center">
            <h4 class="pr-4">Let’s talk.</h4>
            <ul class="flex justify-between">
              <li class="pr-4">toll free phone</li>
              <li class="pr-4">
                <button data-toggle="modal" data-target="#setup-meeting-form" class="start-now btn btn-primary">Setup a Meeting</button>
              </li>
              <li class="pr-4">
                <a class="btn btn-primary" href="https://www.uberconference.com/navalign" target="_blank">Join a Meeting</a>
              </li>
            </ul>
          </div>
          <div class="row p-4 flex justify-center">
            <div class="">
              <a class="navbar-brand" href="/">
                Logo
				      </a>
            </div>
            <div class="">
              <ul class="list-inline">
                <li>Addresses from data</li>
              </ul>
            </div>
            <div class="">
              <ul class="list-inline social-accounts">
                <li class="list-inline-item">
                  <a href="{{.}}" target="_blank" class="display-4 text-primary">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright text-center p-2">
          site disclaimer from data
      	</div>
      </footer>

    </div>
  );
}

export default Footer;