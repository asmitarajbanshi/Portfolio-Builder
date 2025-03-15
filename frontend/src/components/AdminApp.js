import React from 'react';

const AdminApp = () => {
  return (
    <div id="adminApp" className="adminApp">
      {/* Help Icon */}
      <div className="helpIcon">
        <span className="aicon-bubble-ask-1"></span>
      </div>

      {/* Mobile Preview Icon */}
      <div className="mobilePreviewIcon">
        <span className="aicon-phone"></span>
      </div>

      {/* Browser Preview Link */}
      <a target="_blank" className="browserPreviewIcon" rel="noopener noreferrer">
        <span className="aicon-window-search"></span>
      </a>

      {/* Admin Menu Wrapper */}
      <div className="adminMenuWrapper">
        <div className="adminMenuBorder">
          <img
            src="https://d2z18g6bj3mwjn.cloudfront.net/pb4/_output/admin/_img/misc/logo-white-100px.png"
            alt="Admin Logo"
            className="pbLogo"
          />
          <div className="menuTitle">Admin Menu</div>
          <span className="aicon-navicon-round"></span>
        </div>

        {/* Admin Mobile Menu */}
        <div className="adminMenuMobileWrapper">
          <div className="mobileMenuBg"></div>
          <div className="adminMenu">
            <span className="mobileClose aicon-cross"></span>
            <h3 className="mobileHeader aHead center">
              <img
                src="https://d2z18g6bj3mwjn.cloudfront.net/pb4/_output/admin/_img/misc/pb-logo.svg"
                alt="Admin Mobile Logo"
              />
            </h3>
            <div className="mobileWhiteBox">
              <ul className="mLeft">
                <li className="logoLi">
                  <img
                    src="https://d2z18g6bj3mwjn.cloudfront.net/pb4/_output/admin/_img/misc/logo-white-100px.png"
                    alt="Admin Logo"
                  />
                </li>
                <li className="menuLi"><span className="btn">Create</span></li>
                <li className="menuLi">Edit</li>
              </ul>
              <ul className="mRight">
                <li className="menuLi">Styles</li>
                <li className="menuLi">Libraries and Tools</li>
                <li className="menuLi">Settings</li>
                <li className="menuLi publish">
                  <div className="btn ghost">Publish</div>
                </li>
                <li className="menuLi upgrade">
                  <div className="btn ghost green">
                    Upgrade <span className="strikeThrough"> - $1.9</span> <span>- Now 50%</span>
                  </div>
                </li>
                <li className="menuLi earn">
                  <span className="btn ghost blue">
                    <div className="aicon-happy earnIcon"></div>
                    <div className="title">Earn</div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminApp;
