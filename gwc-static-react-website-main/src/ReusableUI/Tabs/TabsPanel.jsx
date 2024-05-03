import React, { useState } from "react";
import './tabs.css'

const TabsPanel = (props) => {
  const [selected, setSelected] = useState(props.selected || 0);

  const renderTab = (index) => {
    setSelected(index);
  };

  const renderMenu = () => {
    const panels = props.children;
    return panels.map((elem, index) => {
      let selectedStyle = index === selected ? " selected" : " ";
      let icon = elem.props.icon;
      let display = elem.props.hide;
      return display ? null : (
        <li
          key={index}
          className={"tab" + selectedStyle}
          onClick={() => renderTab(index)}
        >
          <span> {elem.props.title}</span>
          {icon ? <i className={icon + " tab__icon"} /> : null}
        </li>
      );
    });
  };

  const getSubtitle = () => {
    const subtitle = props.children[selected].props.subtitle;
    if (!subtitle) return null;

    return <h2 className="subtitle">{subtitle}</h2>;
  };

  return (
    <div>
      <ul className="tabs">{renderMenu()}</ul>
      <div className="tab__content">
        {getSubtitle()}
        {props.children[selected]}
      </div>
    </div>
  );
};

export default TabsPanel;
