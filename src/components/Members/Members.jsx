import React, { useState, useEffect, useMemo } from "react";
import "./Members.css";
import member1 from "../../members/person.png";


const Members = () => {
  const membersArr = useMemo(
    () => [
      { id: 1, name: "Person1", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 2, name: "Person2", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 3, name: "Person3", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 4, name: "Person4", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 5, name: "Person5", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 6, name: "Person6", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 7, name: "Person7", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 8, name: "Person8", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 9, name: "Person9", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 10, name: "Person10", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
      { id: 11, name: "Person11", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },

    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [membersArr]);

  useEffect(() => {
    const endIndex =
      startIndex + 5 < membersArr.length ? startIndex + 5 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 5 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">ORGANIZERS</div>
          <div className="title">Trace.IT 2K24</div>
        </div>
      <div className="members-container">
          <div className="members-wrapper">
            {visibleMembers.map((member) => (
              <div className="members-slide" key={member.id}>
                <img src={member.image} alt={member.name} />
                <p>{member.name}</p>
                <div className="cta-buttons">
                    <div className="tertiary-btn">
                        <a href={member.whatsappLink}>WhatsApp &gt;</a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Members;
