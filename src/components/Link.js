import React from "react";

export default function Link(props) {
  const { href, children } = props;
  return (
    <a href={href} className="ui-link">
      {children}
    </a>
  );
}
