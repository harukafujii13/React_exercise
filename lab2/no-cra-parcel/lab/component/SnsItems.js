import React from "react";

function SnsItems() {
  const snsIcons = [
    { id: 1, icon: "fa fa-instagram", title: "Instagram" },
    { id: 2, icon: "fa fa-facebook-f", title: "Facebook" },
    { id: 3, icon: "fa fa-twitter", title: "Twitter" },
    { id: 4, icon: "fa fa-linkedin", title: "LinkedIn" },
    { id: 5, icon: "fa fa-youtube", title: "YouTube" },
    { id: 6, icon: "fa fa-github", title: "Github" },
  ];

  return (
    <>
      {snsIcons.map((media) => {
        return (
          <div key={media.id} className="button">
            <div className="icon">
              <i className={media.icon}></i>
            </div>
            <span>{media.title}</span>
          </div>
        );
      })}
    </>
  );
}

export default SnsItems;
